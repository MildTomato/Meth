import React from "react";
import { Link } from "react-router-dom";
export class ProductCard extends React.PureComponent {
  render() {
    let { id, url, title } = this.props
    return (
    	<Link to={`/product/${id}`}>
    	<div className="product-card">
	  		
	     	<div class="thumb-container">
	    		<img className="product-card__thumbnail thumb thumb--blur" src={url} alt={title} />
	  		</div>

   			<h4>{title}</h4>
   			<p>description</p>
	  							
				
			</div>
			</Link>

    );
  }
}
