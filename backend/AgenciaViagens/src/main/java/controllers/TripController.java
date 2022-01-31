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

import models.Trip;
import models.persistence.TripDAO;

@WebServlet("/trips")
public class TripController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public TripController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int destination = Integer.parseInt(request.getParameter("d"));
		Integer offer;
		try {
			offer = Integer.parseInt(request.getParameter("o"));
		}catch(NumberFormatException error) {
			offer = null;
		}
		List<Trip> trips = TripDAO.getTrips(destination, offer);
		
		String tripsJson = new Gson().toJson(trips);
		
		PrintWriter printWriter = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		printWriter.write(tripsJson);
		printWriter.close();
	}

}
