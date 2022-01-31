package models.persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import models.Trip;

public class TripDAO {
	
	public static List<Trip> getTrips(int destination, Integer offer) {
		
		String sql = null;
		if(offer == null) {
			sql = "SELECT * FROM viagem WHERE viagem.destino = ?;";
		}else {			
			sql = "SELECT viagem.* FROM viagem, promocao "
					+ "WHERE viagem.destino = ? "
					+ "AND promocao.id_promo = ? "
					+ "AND viagem.partida <= promocao.vencimento;";
		}
		PreparedStatement pstm = null;
		Connection con = null;
		ResultSet rset = null;
		List<Trip> trips = new ArrayList<Trip>();
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {				
				pstm = con.prepareStatement(sql);
				
				pstm.setInt(1, destination);
				if(offer != null) {	
					pstm.setInt(2, offer);
				}
				rset = pstm.executeQuery();
				
				while(rset.next()) {
					Trip trip = new Trip();
					trip.setId(rset.getInt("id_viag"));
					trip.setDestination(rset.getInt("destino"));
					trip.setDeparture(rset.getString("partida"));
					trip.setArrival(rset.getString("chegada"));
					trip.setDefaultValue(rset.getDouble("vlr_padrao"));
					trips.add(trip);
				}
			}
		}catch(Exception error) {
			System.out.println("Erro na execução do getTrips! - " + error);
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
		return trips;
	}
}
