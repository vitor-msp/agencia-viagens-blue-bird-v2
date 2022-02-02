package controllers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import models.Client;
import models.persistence.AuthenticationDAO;
import models.persistence.ClientDAO;

@WebServlet("/login")
public class LoginController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public LoginController() {
        super();
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			Client client = new Gson().fromJson(request.getReader(), Client.class);
		
			client = AuthenticationDAO.authentication(client);
			
			if(client != null) {			
				client = ClientDAO.getClient(client);
			}

			String clientJson = new Gson().toJson(client);
			
			PrintWriter printWriter = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			printWriter.write(clientJson);
			printWriter.close();
			
		}catch(Exception error) {
			System.out.println(error);
			response.sendError(500);
		}
	}
}
