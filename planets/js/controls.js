var CameraControls = function(camera, element) {
	// OnMousemove: Zoom camera
	// OnScroll: Rotate Camera
	// OnArrow: Rotate Camera
	// OnSpace: Reset Camera
	var mouseDown = null;
	var rotate = function(amount) {
		camera.rotation.y += amount;
		camera.rotation.x += amount;
	}
	var zoom = function(amount) {
		camera.position.z += amount;
	}
	var setListeners = function(rootElement) {
		document.body.onContextMenu = function() {
			return false;
		}
		document.body.onmousedown = function() { 
			mouseDown  = true;
		}
		document.body.onmouseup = function() {			
			mouseDown = false
		}
		element.onmousemove = function(e) {
			if (mouseDown) {
				zoom(e.movementY);
				rotate(e.movementX*0.0001);
			}
		};
		element.addEventListener('DOMMouseScroll', function() {
			console.log("SCROLL!!")
		}, false);
	}
	
	var init = function() {
		if (typeof element === 'undefined') {
			element = document;
		}

		setListeners();
	}

	init();
}

var PlanetControls = function(mesh) {
	var mouseDown = null;
	document.body.onmousedown = function() { 
		mouseDown  = true;
	}
	document.body.onmouseup = function() {			
		mouseDown = false
	}
	document.body.onmousemove = function(e) {
		if (mouseDown) {
			mesh.rotation.y += e.movementX*0.001;
			mesh.rotation.x += e.movementY*0.001;
		}
	};
}
