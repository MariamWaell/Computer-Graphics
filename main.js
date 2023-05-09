let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

// Intialize main shape
// consisting of  circles, ellipse, rectangles, squares
let shapes = [
  {
    x: 210,
    y: 215,
    radius1: 20,
    radius2: 20,
    type: "circle",
  },
  {
    x: 280,
    y: 215,
    radius1: 20,
    radius2: 20,
    type: "circle",
  },
  {
    x: 280,
    y: 215,
    radius1: 5,
    radius2: 5,
    type: "circle",
  },
  {
    x: 210,
    y: 215,
    radius1: 5,
    radius2: 5,
    type: "circle",
  },
  { x: 245, y: 255, radius1: 10, radius2: 30, type: "ellipse" },
  {
    x: 170,
    y: 115,
    width: 150,
    height: 50,
    type: "rect",
  },
  {
    x: 170,
    y: 175,
    width: 150,
    height: 150,
    type: "square",
  },
  {
    x: 220,
    y: 305,
    width: 50,
    height: 10,
    type: "rect",
  },
];

const draw_rect = (shape) => {
  context.strokeRect(shape.x, shape.y, shape.width, shape.height);
};

const draw_ellipse = (shape) => {
  context.beginPath();
  context.ellipse(
    shape.x,
    shape.y,
    shape.radius1,
    shape.radius2,
    0,
    0,
    2 * Math.PI
  );
  context.stroke();
};

const draw_shapes = () => {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  for (let shape of shapes) {
    if (shape.type == "rect" || shape.type == "square") {
      draw_rect(shape);
    } else if (shape.type == "ellipse" || shape.type == "circle") {
      draw_ellipse(shape);
    }
  }
};

function translate_x(delta_x) {
  for (let shape of shapes) {
    shape.x += delta_x;
  }
  draw_shapes();
}

function translate_y(delta_y) {
  for (let shape of shapes) {
    shape.y += delta_y;
  }
  draw_shapes();
}
function scale(scale_factor) {
  for (let shape of shapes) {
    shape.x *= scale_factor;
    shape.y *= scale_factor;
    if (shape.type == "rect" || shape.type == "square") {
      shape.width = shape.width * scale_factor;
      shape.height = shape.height * scale_factor;
    } else if (shape.type == "ellipse" || shape.type == "circle") {
      shape.radius2 = shape.radius2 * scale_factor;
      shape.radius1 = shape.radius1 * scale_factor;
    }
  }
  translate_x((-(scale_factor - 1) * canvas.width) / 2);
  translate_y((-(scale_factor - 1) * canvas.height) / 2);
}

function rotate(angle) {
  let centerY = shapes[6].y - shapes[5].y + shapes[6].height / 2 + shapes[5].y;
  let centerX = shapes[5].x + 0.5 * shapes[5].width;

  context.translate(centerX, centerY);
  context.rotate((angle * Math.PI) / 180);
  context.translate(-centerX, -centerY);
  draw_shapes();
}

const mouse_down = (event) => {
  draw_shapes();
};
canvas.onmousedown = mouse_down();
