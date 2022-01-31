package models.persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import models.Offer;

public class OfferDAO {
	
	public static List<Offer> getOffers() {
		
		String sql = "SELECT * FROM Promocao;";
		PreparedStatement pstm = null;
		Connection con = null;
		ResultSet rset = null;
		List<Offer> offers = new ArrayList<Offer>();
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {				
				pstm = con.prepareStatement(sql);
				rset = pstm.executeQuery();
				
				while(rset.next()) {
					Offer offer = new Offer();
					offer.setId(rset.getInt("id_promo"));
					offer.setDestination(rset.getInt("destino"));
					offer.setDiscount(rset.getFloat("desconto"));
					offer.setExpiration(rset.getString("vencimento"));
					offers.add(offer);
				}
			}
		}catch(Exception error) {
			System.out.println("Erro na execução do getOffers! - " + error);
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
		return offers;
	}
}
