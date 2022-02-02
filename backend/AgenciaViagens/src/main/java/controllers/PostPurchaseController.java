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
import models.Pack;
import models.persistence.AuthenticationDAO;
import models.persistence.PurchaseDAO;

@WebServlet("/postPurchase")
public class PostPurchaseController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public PostPurchaseController() {
        super();
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			boolean ret = false;
			Pack pack = new Gson().fromJson(request.getReader(), Pack.class);
			Client clientToAuth = pack.getClient();
			Client client = AuthenticationDAO.authentication(clientToAuth);

			if(client != null && client.getId() == clientToAuth.getId()) {
				ret = PurchaseDAO.createPurchase(pack);
			}

			String purchaseJson = new Gson().toJson(ret);

			PrintWriter printWriter = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			printWriter.write(purchaseJson);
			printWriter.close();
			
		}catch(Exception error) {
			System.out.println(error);
			response.sendError(500);
		}
	}
}
