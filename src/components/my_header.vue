<template>
    <div>
        <section class="header text-center">
			<nav class="navbar navbar-expand-lg navbar-light navbar-custom">
				<div class="container"><a class="navbar-brand" href="/"><i class="fas fa-shopping-bag primary-color mr-1"></i>美多</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-1" aria-controls="navbar-1" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
					<div class="collapse navbar-collapse pull-xs-right justify-content-end" id="navbar-1">
						<ul class="navbar-nav mt-2 mt-md-0">
							<li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li>
							<li class="nav-item dropdown mega-menu"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop </a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									<div class="container">
										<div class="divider"></div>
										<div class="row">
											<div class="col-md-2">
												<h6 class="text-uppercase">Women's</h6>
												<ul class="nav flex-column">
													<li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												</ul>
											</div>
											<div class="col-md-2">
												<h6 class="text-uppercase">Men's</h6>
												<ul class="nav flex-column">
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												</ul>
											</div>
											<div class="col-md-2">
												<h6 class="text-uppercase">Girl's</h6>
												<ul class="nav flex-column">
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												</ul>
											</div>
											<div class="col-md-2">
												<h6 class="text-uppercase">Boy's</h6>
												<ul class="nav flex-column">
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
													<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												</ul>
											</div>
											<div class="col-md-4">
												<h6 class="text-uppercase">Featured Items</h6>
												<div class="row">
													<div class="col-6 text-center"><a href="item.html">
														<img src="../assets/images/placeholder-product.jpg" alt="" class="img-fluid mt-2 mb-3"></a>
														<h6 class="mb-0"><a href="item.html">Product Name</a></h6>
														<p><span class="emphasis">$49.00</span></p>
														<a href="#" class="btn btn-sm btn-outline-secondary mt-0">Buy Now</a>
												</div>
													<div class="col-6 text-center"><a href="item.html">
														<img src="../assets/images/placeholder-product.jpg" alt="" class="img-fluid mt-2 mb-3"></a>
														<h6 class="mb-0"><a href="item.html">Product Name</a></h6>
														<p><span class="emphasis">$49.00</span></p>
														<a href="#" class="btn btn-sm btn-outline-secondary mt-0">Buy Now</a>
											</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages </a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="index.html">Homepage</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item" href="catalog.html">Catalog</a>
									<a class="dropdown-item" href="item.html">Item Detail</a>
									<a class="dropdown-item" href="cart.html">Cart</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item" href="/my_profile">Contact</a>

								</div>
							</li>
							<li class="nav-item"><a class="nav-link" href="/my_profile">Contact</a></li>
							<li class="nav-item"><a class="nav-link" href="/upload">upload</a></li>
						<li class="nav-item dropdown"><input type="text" /></li>
							<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-shopping-cart"></i> <span class="badge badge-pill badge-primary">3</span></a>
								<div class="dropdown-menu dropdown-menu-right dropdown-cart" aria-labelledby="navbarDropdown">
									<h6>3 Items <span class="emphasis">$147.00</span></h6>
									<div class="dropdown-divider"></div>
									<ul class="shopping-cart-items">
										<li class="row">
											<div class="col-3">
												<img src="../assets/images/placeholder-product.jpg" width="60">
											</div>
											<div class="col-9">
												<h6><a href="item.html">Product Name</a></h6>
												<span class="text-muted">1x</span>
												<span class="emphasis">$49.00</span></div>
										</li>
										<li class="row">
											<div class="col-3">
												<img src="../assets/images/placeholder-product.jpg" width="60">
											</div>
											<div class="col-9">
												<h6><a href="item.html">Product Name</a></h6>
												<span class="text-muted">1x</span>
												<span class="emphasis">$49.00</span></div>
										</li>
										<li class="row">
											<div class="col-3">
												<img src="../assets/images/placeholder-product.jpg" width="60">
											</div>
											<div class="col-9">
												<h6><a href="item.html">Product Name</a></h6>
												<span class="text-muted">1x</span>
												<span class="emphasis">$49.00</span></div>
										</li>
									</ul>
									
									<a href="cart.html" class="btn btn-lg btn-full-width btn-primary" style="margin: 0;">View Cart</a></div>
							</li>
							<li class="nav-item dropdown">
								<!-- 注册登录 -->
								
								<li class="nav-item active" v-show='login'>
									<a class="nav-link" href="#">
										<a href="/my_profile">

											<!-- 实时展示头像 -->
											<Avatar :src="photo" fit='fill'></Avatar>
											<!-- <img :src='photo' width='50'> -->
										
										</a> <span class="sr-only">(current)</span>
									</a>
								</li>
								<li class="nav-item active" v-show='login'>
									<a class="nav-link" href="#">
										<a href="/my_profile">
										
											{{ username }}
										
										</a> <span class="sr-only">(current)</span>
									</a>
								</li>
								<li class="nav-item active" v-show='login'>
									<a class="nav-link" @click="logout">
										注销 <span class="sr-only">(current)</span>
									</a>
								</li>

								<li class="nav-item active" v-show='!login'>
									<a class="nav-link" href="/login">
										登录 <span class="sr-only">(current)</span>
									</a>
								</li>
								<li class="nav-item active" v-show='!login'>
									<a class="nav-link" href="/reg">
										注册 <span class="sr-only">(current)</span>
									</a>
								</li>
								
						</ul>
					</div>
				</div>
			</nav>
		</section>
    </div>
</template>

<script>
export default {

    name:'test',
    data(){
        return{
			username:'登录',
			photo:'',
			login:false
        }
    },
	beforeMount:function(){
		if(localStorage['username']){
			this.username=localStorage['username'];
			this.uid=localStorage['uid'];
			this.login=true;
			this.photo='http://127.0.0.1:8000/static/upload/'+localStorage.getItem('img')
		}
	},
	methods:{
		logout:function(){
			console.log('退出登录')
			localStorage.removeItem('username')
			localStorage.removeItem('uid')
			this.$router.go(0)
		}
	}
}
</script>

<style>
    .on{
        background: #acff66
    }
    .off{
        background: #ffffaa
    }
</style>
