package controllers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import models.Contact;
import models.persistence.ContactDAO;

@WebServlet("/contact")
public class ContactController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ContactController() {
        super();
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			boolean ret = false;
			Contact contact = new Gson().fromJson(request.getReader(), Contact.class);

			ret = ContactDAO.createContact(contact);
			
			String contactJson = new Gson().toJson(ret);
			
			PrintWriter printWriter = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			printWriter.write(contactJson);
			printWriter.close();
			
		}catch(Exception error) {
			System.out.println(error);
			response.sendError(500);
		}
	}
}
