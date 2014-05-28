
		<header>
			<div class="wrapper">
				<span class="col1">
					<a href="http://repzio.com"><img src="{{company.logo}}?width=100" alt="{{company.name}}"/></a>
				</span>


				<span class="col2">
					<h1>{{company.name}}</h1>
				</span>


				<span class="col3">
					<div id="rep-info">
						<ul>
							<li><span class="info-label">Sale Rep:</span> {{rep.name}}</li>
							<li><span class="info-label">Email:</span> <a href="mailto:{{rep.email}}?subject=Product line inquiry">{{rep.email}}</a></li>
							<li><span class="info-label">Phone:</span> <a href="tel:{{rep.phone}}">{{rep.phone}}</a></li>
						</ul>
					</div><!-- /#rep-info-->
				</span>
			</div><!-- /.wrapper-->
		</header>





			<section id="products-list">
				<ul>
					<li class="item cf" ng-repeat="item in items" ng-mouseover="indicator()">
						<div class="wrapper">

							<!-- Image zoom directive target   -?h=300&w=300&mode=max-->
							<div image-zoom image-src="{{item.PhotoName}}" alt="{{item.ItemName}}"></div>

							<div class="item-details">
								<ul>
									<li>{{item.ItemName}}</li>
									<li><span class="info-label">Item Id</span>{{item.ItemID}}</li>
									<li><span class="info-label">Base Price </span>{{item.BasePrice}}</li>
									<li><span class="info-label">Dimensions</span>{{item.Dimensions | newline}}</li>
									<li class="description">{{item.Description}}</li>

									<li class="contact-button"><a href="mailto:{{rep.email}}?subject=Product inquiry (item ID {{item.ItemID}})" class="button">Contact your rep</a></li>
								</ul>

							</div><!-- /.item-details-->
						</div><!-- /.wrapper-->
					</li>
				</ul>
			</section>





		<div id="pages">
			<ul>
				<li class="page" ng-repeat="page in items"></li>
			</ul>
		</div><!-- /#pages-->





		<footer>
			<div class="wrapper">
				<p>&copy;2014 {{company.name}}</p>
			</div><!-- /.wrapper-->
		</footer>


