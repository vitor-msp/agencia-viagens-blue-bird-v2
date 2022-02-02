package models.persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import models.Client;
import models.Destination;
import models.Offer;
import models.Pack;
import models.Purchase;
import models.Trip;

public class PurchaseDAO {
	
	public static boolean createPurchase(Pack pack) {
		
		boolean ret = false;
		String sql = "INSERT INTO Adquire (cliente, viagem, promocao)"
				+ " VALUES (?, ?, ?);";
		PreparedStatement pstm = null;
		Connection con = null;
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {
				pstm = con.prepareStatement(sql);
				pstm.setInt(1, pack.getClient().getId());
				pstm.setInt(2, pack.getTrip().getId());
				Integer offer = pack.getOffer().getId();
				if(offer == null) {
					pstm.setNull(3, 0);					
				}else {					
					pstm.setInt(3, offer);					
				}
				
				pstm.executeUpdate();
				ret = true;
			}
		}catch(Exception error) {
			System.out.println("Erro na execução do createPurchase! - " + error);
		}finally{
			try {
				if(pstm != null) {
					pstm.close();
				}
				if(con != null) {
					con.close();
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		return ret;
	}
	
	public static List<Purchase> getPurchases(Client client) {
		
		String sql = "SELECT A.id_adq, A.promocao, V.id_viag, V.destino, "
				+ "V.partida, V.chegada, V.vlr_padrao "
				+ "FROM Adquire A "
				+ "INNER JOIN Viagem V ON V.id_viag = A.viagem "
				+ "WHERE A.cliente = ?;";
		
		PreparedStatement pstm = null;
		Connection con = null;
		ResultSet rset = null;
		List<Purchase> purchases = new ArrayList<Purchase>();
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {				
				pstm = con.prepareStatement(sql);
				pstm.setInt(1, client.getId());
				rset = pstm.executeQuery();
				
				while(rset.next()) {
					Purchase purchase = new Purchase();
					purchase.setId(rset.getInt("id_adq"));

					Offer offer = new Offer();
					offer.setId(rset.getInt("promocao"));
					purchase.setOffer(offer);

					Trip trip = new Trip();
					trip.setId(rset.getInt("id_viag"));

					Destination destination = new Destination();
					destination.setId(rset.getInt("destino"));
					trip.setDestination(destination);

					trip.setArrival(rset.getString("partida"));
					trip.setDeparture(rset.getString("chegada"));
					trip.setDefaultValue(rset.getDouble("vlr_padrao"));

					purchase.setTrip(trip);
					purchases.add(purchase);
				}
			}
		}catch(Exception error) {
			System.out.println("Erro na execução do getPurchases! - " + error);
		}finally{
			try {
				if(rset != null) {
					rset.close();
				}
				if(pstm != null) {
					pstm.close();
				}
				if(con != null) {
					con.close();
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		return purchases;
	}

	public static boolean deletePurchase(Purchase purchase) {
		
		boolean ret = false;
		String sql = "DELETE FROM Adquire WHERE Adquire.id_adq = ?;";
		PreparedStatement pstm = null;
		Connection con = null;
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {
				pstm = con.prepareStatement(sql);
				pstm.setInt(1, purchase.getId());
				pstm.executeUpdate();
				ret = true;
			}
		}catch(Exception error) {
			System.out.println("Erro na execução do deletePurchase! - " + error);
		}finally{
			try {
				if(pstm != null) {
					pstm.close();
				}
				if(con != null) {
					con.close();
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		return ret;
	}
}
