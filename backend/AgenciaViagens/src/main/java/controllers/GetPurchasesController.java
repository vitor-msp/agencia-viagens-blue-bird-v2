package controllers;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import models.Client;
import models.Purchase;
import models.persistence.AuthenticationDAO;
import models.persistence.PurchaseDAO;

@WebServlet("/getPurchases")
public class GetPurchasesController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public GetPurchasesController() {
        super();
    }
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			List<Purchase> purchases = new ArrayList<Purchase>();
			Client clientToAuth = new Gson().fromJson(request.getReader(), Client.class);
			Client client = AuthenticationDAO.authentication(clientToAuth);

			if(client != null && client.getId() == clientToAuth.getId()) {
				purchases = PurchaseDAO.getPurchases(client);
			}
			
			String purchasesJson = new Gson().toJson(purchases);
			
			PrintWriter printWriter = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			printWriter.write(purchasesJson);
			printWriter.close();			
			
		}catch(Exception error) {
			System.out.println(error);
			response.sendError(500);
		}
	}
}
