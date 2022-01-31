package controllers;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import models.Destination;
import models.persistence.DestinationDAO;

@WebServlet("/destinations")
public class DestinationController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public DestinationController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<Destination> destinations = DestinationDAO.getDestinations();
		
		String destinationsJson = new Gson().toJson(destinations);
		
		PrintWriter printWriter = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		printWriter.write(destinationsJson);
		printWriter.close();
	}

}
