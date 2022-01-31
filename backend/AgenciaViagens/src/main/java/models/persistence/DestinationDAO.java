package models.persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import models.Destination;

public class DestinationDAO {
	
	public static List<Destination> getDestinations() {
		
		String sql = "SELECT * FROM Destino;";
		PreparedStatement pstm = null;
		Connection con = null;
		ResultSet rset = null;
		List<Destination> destinations = new ArrayList<Destination>();
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {				
				pstm = con.prepareStatement(sql);
				rset = pstm.executeQuery();
				
				while(rset.next()) {
					Destination destination = new Destination();
					destination.setId(rset.getInt("id_dest"));
					destination.setCity(rset.getString("cidade"));
					destination.setUf(rset.getString("uf"));
					destination.setLandingPlace(rset.getString("loc_desemb"));
					destinations.add(destination);
				}
			}
		}catch(Exception error) {
			System.out.println("Erro na execução do getDestinations! - " + error);
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
		return destinations;
	}
}
