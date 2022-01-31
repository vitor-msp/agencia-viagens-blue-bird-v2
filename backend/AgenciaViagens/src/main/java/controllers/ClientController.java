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
import models.persistence.ClientDAO;

@WebServlet("/client")
public class ClientController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ClientController() {
        super();
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		boolean ret = false;
		Client client = new Gson().fromJson(request.getReader(), Client.class);
		ret = ClientDAO.createClient(client);
		
		String clientJson = new Gson().toJson(ret);
		
		PrintWriter printWriter = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		printWriter.write(clientJson);
		printWriter.close();
	}
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		boolean ret = false;
		Client client = new Gson().fromJson(request.getReader(), Client.class);
		ret = ClientDAO.updateClient(client);
		
		String clientJson = new Gson().toJson(ret);
		
		PrintWriter printWriter = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		printWriter.write(clientJson);
		printWriter.close();
	}
}