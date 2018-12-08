import React from "react";
import { Link } from "react-router-dom";
export class ProductCard extends React.PureComponent {
  render() {
    let { id, url, title } = this.props
    return (
    	<Link to={`/product/${id}`}>
    	<div class="product-card">
	  		
	     	
	    	<img className="product-card__thumbnail" src={url} alt={title} />
	  			
   			<h4>{title}</h4>
   			<p>description</p>
	  							
				
			</div>
			</Link>

    );
  }
}
