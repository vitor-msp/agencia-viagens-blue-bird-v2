package filters;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
@ WebFilter(asyncSupported = true, urlPatterns = { "/*" })
public class DefaultFilter implements Filter {
 
    public DefaultFilter() {}
 
    public void destroy() {}
 
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain)
            throws IOException, ServletException {
 
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        System.out.println("DefaultFilter HTTP Request: " + request.getMethod());

        ((HttpServletResponse) servletResponse).addHeader("Access-Control-Allow-Origin", "*");
        ((HttpServletResponse) servletResponse).addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
        ((HttpServletResponse) servletResponse).addHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
        ((HttpServletResponse) servletResponse).addHeader("Access-Control-Max-Age", "1728000");

        chain.doFilter(request, servletResponse);
    }
 
    public void init(FilterConfig fConfig) throws ServletException {}
 
}





















//package filters;
//
//import java.io.IOException;
//import java.util.logging.Logger;
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.FilterConfig;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//
//public class DefaultFilter implements Filter {
//
//    private FilterConfig filterConfig;
//    private static final Logger log = Logger.getLogger(DefaultFilter.class.getName());
//
//    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain)
//        throws IOException, ServletException {
//        log.warning("Log filter processed a " + getFilterConfig().getInitParameter("logType")
//            + " request");
//
//        filterChain.doFilter(request, response);
//    }
//
//    public FilterConfig getFilterConfig() {
//        return filterConfig;
//    }
//
//    public void init(FilterConfig filterConfig) {
//        this.filterConfig = filterConfig;
//    }
//
//    public void destroy() {}
//
//}