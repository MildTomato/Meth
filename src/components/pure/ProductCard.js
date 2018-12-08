import React from "react";
import { Link } from "react-router-dom";
export class ProductCard extends React.PureComponent {
  render() {
    let { id, url, title } = this.props
    return (
    	
		  	<Link to={`/product/${id}`} className="product-card">
		      <div>
		    		<img className="product-card__thumbnail" src={url} alt={title} />
		  			<div>
		    			<h4>{title}</h4>
		    			<p>description</p>
		  			</div>
					</div>
				</Link>
			
    );
  }
}
