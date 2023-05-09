const x_trans = document.getElementById("x_trans");
const y_trans = document.getElementById("y_trans");
const rot_degree = document.getElementById("rot_degree");
const scaling_factor = document.getElementById("scaling_factor");
const applyBtn = document.getElementById("applyBtn");
const scale_factor_err = document.getElementById("scale_factor_err");

let x_trans_val, y_trans_val, rot_degree_val, scaling_factor_val;

x_trans.onchange = () => {
  x_trans_val = parseInt(x_trans.value);

  if (!x_trans_val) {
    return;
  }

  translate_x(x_trans_val);
};

y_trans.onchange = () => {
  y_trans_val = parseInt(y_trans.value);

  if (!y_trans_val) {
    return;
  }
  translate_y(-1 * y_trans_val);
};

rot_degree.onchange = () => {
  rot_degree_val = parseInt(rot_degree.value);

  if (!rot_degree_val) {
    return;
  }
  rotate(rot_degree_val);
};

scaling_factor.onchange = () => {
  scaling_factor_val = parseFloat(scaling_factor.value);

  if (!scaling_factor_val) {
    return;
  }
  if (scaling_factor_val < 0) {
    scale_factor_err.innerHTML = "please, Enter positive value";
    return;
  }
  scale(scaling_factor_val);
  scale_factor_err.innerHTML = "";
  scaling_factor.value = "";
};
