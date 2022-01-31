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

import models.Offer;
import models.persistence.OfferDAO;

@WebServlet("/offers")
public class OfferController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public OfferController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<Offer> offers = OfferDAO.getOffers();
		
		String offersJson = new Gson().toJson(offers);
		
		PrintWriter printWriter = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		printWriter.write(offersJson);
		printWriter.close();
	}

}
