---
title: DGD
layout: default_style
---

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');

* {
	box-sizing: border-box;
}


.title {
	background: rgba(255, 255, 255, 0.7);
	color: #333;
	position: fixed;
	text-align: right;
	top: 0;
	right: 0;
	padding: 10px 15px;
	margin: 0;
	z-index: 100;
}

.slider {
	position: relative;
	overflow: hidden;
	height: 100vh;
	width: 100%;
}

.slide {
	background-position: center center;
	background-size: cover;
	position: absolute;
	top: 0;
	left: 100%;
	height: 100%;
	width: 100%;
}

.slide.active {
	transform: translateX(-100%);
}

.slide .info {
	background-color: rgba(255, 255, 255, 0.7);
	color: #333;
	padding: 20px 15px;
	position: absolute;
	opacity: 0.1;
	top: 80px;
	left: 40px;
	text-align: center;
	width: 300px;
	max-width: 100%;
}

.slide.active .info{
	opacity: 1;
	transform: translateY(-40px);
	transition: all 0.5s ease-in-out 0.8s;
}

.slide .info h1 {
	margin: 10px 0;
}

.slide .info p {
	letter-spacing: 1px;
}

.eraser {
	background: #f5f5f5;
	position: absolute;
	transition: transform 0.5s ease-in-out;
  opacity: 0.95;
	top: 0;
	left: 100%;
	height: 100%;
	width: 100%;
	z-index: 100;
}

.eraser.active {
	transform: translateX(-100%);
}

.buttons-container {
	position: absolute;
	bottom: 50px;
	right: 60px;
/*   display: flex; */
  
}

.buttons-container button {
	border: 2px solid #fff;
	background-color: transparent;
	color: #fff;
	cursor: pointer;
	padding: 8px 30px;
  margin-right: 10px;
}

.buttons-container button:hover {
	background-color: #fff;
	color: #A9A9A9;
  opacity: 0.9;
}


@media (max-width: 400px) {
	.slide .info {
		top: 100px;
		left: 10px;
	}
}
</style>

<div class="slider">
    <div class="slider-container">
        <div class="slide active"
            style="background-image: url('https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80');">
            <div class="info">
                <h1>Sultanahmet</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum.</p>
            </div>
        </div>
        <div class="slide"
            style="background-image: url('https://images.unsplash.com/photo-1527255754861-3ac1a8a04916?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');">
            <div class="info">
                <h1>Grand bazaar</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, vero earum perspiciatis officia</p>
            </div>
        </div>
        <div class="slide"
            style="background-image: url('https://images.unsplash.com/photo-1550946715-c2d98d2f5c74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');">
            <div class="info">
                <h1>Turkish delight & confectionary</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt recusandae unde autem</p>
            </div>
        </div>
        <div class="slide"
            style="background-image: url('https://images.unsplash.com/photo-1531168010535-64a9823f7eb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');">
            <div class="info">
                <h1>Galacta Tower</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="slide"
            style="background-image: url('https://images.unsplash.com/photo-1544906125-da2be8706efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80');">
            <div class="info">
                <h1>Architecture</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum.</p>
            </div>
        </div>
        <div class="slide"
            style="background-image: url('https://images.unsplash.com/photo-1523401153564-541006e5285a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80');">
            <div class="info">
                <h1>Blue Mosque</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt recusandae.</p>
            </div>
        </div>
    </div>
    <div class="eraser"></div>
    <div class="buttons-container">
        <button id="previous"><i class="fas fa-chevron-left"></i></button>
        <button id="next"><i class="fas fa-chevron-right"></i></button>
    </div>
</div>
<script src="../js/slider.js"></script>
