import React from 'react';
import '../App.css'

function ControllerComponent () {
    return (
        <div className="ControllerComponent">
            <h1>ControllerComponent</h1>            
        </div>
    )
}

export default ControllerComponent;






// import {ControllerDataset} from './controller_dataset';
// import * as ui from './ui';

// // The number of classes we want to predict. In this example, we will be
// // predicting 4 classes for up, down, left, and right.
// const NUM_CLASSES = 4;

// // A webcam iterator that generates Tensors from the images from the webcam.
// let webcam;

// // The dataset object where we will store activations.
// const controllerDataset = new ControllerDataset(NUM_CLASSES);

// let truncatedMobileNet;
// let model;

// // Loads mobilenet and returns a model that returns the internal activation
// // we'll use as input to our classifier model.
// async function loadTruncatedMobileNet() {
//   const mobilenet = await tf.loadLayersModel(
//       'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');

//   // Return a model that outputs an internal activation.
//   const layer = mobilenet.getLayer('conv_pw_13_relu');
//   return tf.model({inputs: mobilenet.inputs, outputs: layer.output});
// }

// // When the UI buttons are pressed, read a frame from the webcam and associate
// // it with the class label given by the button. up, down, left, right are
// // labels 0, 1, 2, 3 respectively.
// ui.setExampleHandler(async label => {
//   let img = await getImage();

//   controllerDataset.addExample(truncatedMobileNet.predict(img), label);

//   // Draw the preview thumbnail.
//   ui.drawThumb(img, label);
//   img.dispose();
// })

// /**
//  * Sets up and trains the classifier.
//  */
// async function train() {
//   if (controllerDataset.xs == null) {
//     throw new Error('Add some examples before training!');
//   }

//   // Creates a 2-layer fully connected model. By creating a separate model,
//   // rather than adding layers to the mobilenet model, we "freeze" the weights
//   // of the mobilenet model, and only train weights from the new model.
//   model = tf.sequential({
//     layers: [
//       // Flattens the input to a vector so we can use it in a dense layer. While
//       // technically a layer, this only performs a reshape (and has no training
//       // parameters).
//       tf.layers.flatten(
//           {inputShape: truncatedMobileNet.outputs[0].shape.slice(1)}),
//       // Layer 1.
//       tf.layers.dense({
//         units: ui.getDenseUnits(),
//         activation: 'relu',
//         kernelInitializer: 'varianceScaling',
//         useBias: true
//       }),
//       // Layer 2. The number of units of the last layer should correspond
//       // to the number of classes we want to predict.
//       tf.layers.dense({
//         units: NUM_CLASSES,
//         kernelInitializer: 'varianceScaling',
//         useBias: false,
//         activation: 'softmax'
//       })
//     ]
//   });

//   // Creates the optimizers which drives training of the model.
//   const optimizer = tf.train.adam(ui.getLearningRate());
//   // We use categoricalCrossentropy which is the loss function we use for
//   // categorical classification which measures the error between our predicted
//   // probability distribution over classes (probability that an input is of each
//   // class), versus the label (100% probability in the true class)>
//   model.compile({optimizer: optimizer, loss: 'categoricalCrossentropy'});

//   // We parameterize batch size as a fraction of the entire dataset because the
//   // number of examples that are collected depends on how many examples the user
//   // collects. This allows us to have a flexible batch size.
//   const batchSize =
//       Math.floor(controllerDataset.xs.shape[0] * ui.getBatchSizeFraction());
//   if (!(batchSize > 0)) {
//     throw new Error(
//         `Batch size is 0 or NaN. Please choose a non-zero fraction.`);
//   }

//   // Train the model! Model.fit() will shuffle xs & ys so we don't have to.
//   model.fit(controllerDataset.xs, controllerDataset.ys, {
//     batchSize,
//     epochs: ui.getEpochs(),
//     callbacks: {
//       onBatchEnd: async (batch, logs) => {
//         ui.trainStatus('Loss: ' + logs.loss.toFixed(5));
//       }
//     }
//   });
// }

// let isPredicting = false;

// async function predict() {
//   ui.isPredicting();
//   while (isPredicting) {
//     // Capture the frame from the webcam.
//     const img = await getImage();

//     // Make a prediction through mobilenet, getting the internal activation of
//     // the mobilenet model, i.e., "embeddings" of the input images.
//     const embeddings = truncatedMobileNet.predict(img);

//     // Make a prediction through our newly-trained model using the embeddings
//     // from mobilenet as input.
//     const predictions = model.predict(embeddings);

//     // Returns the index with the maximum probability. This number corresponds
//     // to the class the model thinks is the most probable given the input.
//     const predictedClass = predictions.as1D().argMax();
//     const classId = (await predictedClass.data())[0];
//     img.dispose();

//     ui.predictClass(classId);
//     await tf.nextFrame();
//   }
//   ui.donePredicting();
// }

// /**
//  * Captures a frame from the webcam and normalizes it between -1 and 1.
//  * Returns a batched image (1-element batch) of shape [1, w, h, c].
//  */
// async function getImage() {
//   const img = await webcam.capture();
//   const processedImg =
//       tf.tidy(() => img.expandDims(0).toFloat().div(127).sub(1));
//   img.dispose();
//   return processedImg;
// }

// document.getElementById('train').addEventListener('click', async () => {
//   ui.trainStatus('Training...');
//   await tf.nextFrame();
//   await tf.nextFrame();
//   isPredicting = false;
//   train();
// });
// document.getElementById('predict').addEventListener('click', () => {
//   ui.startPacman();
//   isPredicting = true;
//   predict();
// });

// async function init() {
//   try {
//     webcam = await tfd.webcam(document.getElementById('webcam'));
//   } catch (e) {
//     console.log(e);
//     document.getElementById('no-webcam').style.display = 'block';
//   }
//   truncatedMobileNet = await loadTruncatedMobileNet();

//   ui.init();

//   // Warm up the model. This uploads weights to the GPU and compiles the WebGL
//   // programs so the first time we collect data from the webcam it will be
//   // quick.
//   const screenShot = await webcam.capture();
//   truncatedMobileNet.predict(screenShot.expandDims(0));
//   screenShot.dispose();
// }

// // Initialize the application.
// init();



/* <html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title>Webcam Pacman</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.cyan-teal.min.css" />
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
  <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <header>
    Turn your <b>Web Camera</b> into a controller using a <b>Neural Network</b>.
  </header>
  <div id="no-webcam">
      No webcam found. <br/>
      To use this demo, use a device with a webcam.
    </div>
  <!-- Top -->
  <div id="pacman-container">
    <div id="logo">
      <div id="logo-l">
        <div id="logo-b">
        </div>
      </div>
    </div>
  </div>

  <div id="status">Loading mobilenet...</div>

  <div class="controller-panels" id="controller" style="display:none">

    <div class="panel training-panel">

      <!-- Big buttons. -->
      <div class="panel-row big-buttons">
        <button id="train">
          <img width="66" height="66" src="./images/button.svg" />
          <span id="train-status">TRAIN MODEL</span>
        </button>
        <button id="predict">
          <img width="66" height="66" src="./images/button.svg" />
          <span>PLAY</span>
        </button>
      </div><!-- /.panel-row -->

      <div class="panel-row params-webcam-row">

        <!-- Hyper params. -->
        <div class="hyper-params">

          <!-- Learning rate -->
          <div class="dropdown">
            <label>Learning rate</label>
            <div class="select">
              <select id="learningRate">
                <option value="0.00001">0.00001</option>
                <option selected value="0.0001">0.0001</option>
                <option value="0.01">0.001</option>
                <option value="0.03">0.003</option>
              </select>
            </div>
          </div>

          <!-- Batch size -->
          <div class="dropdown">
            <label>Batch size</label>
            <div class="select">
              <select id="batchSizeFraction">
                <option value="0.05">0.05</option>
                <option value="0.1">0.1</option>
                <option selected value="0.4">0.4</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>

          <!-- Epochs -->
          <div class="dropdown">
            <label>Epochs</label>
            <div class="select">
              <select id="epochs">
                <option value="10">10</option>
                <option selected value="20">20</option>
                <option value="40">40</option>
              </select>
            </div>
          </div>

          <!-- Hidden units -->
          <div class="dropdown">
            <label>Hidden units</label>
            <div class="select">
              <select id="dense-units">
                <option value="10">10</option>
                <option selected value="100">100</option>
                <option value="200">200</option>
              </select>
            </div>
          </div>

        </div><!-- /.hyper-params -->

        <div class="webcam-box-outer">
          <div class="webcam-box-inner">
            <video autoplay playsinline muted id="webcam" width="224" height="224"></video>
          </div>
        </div>

      </div><!-- /.panel-row -->

    </div><!-- /.panel -->

    <div class="panel joystick-panel">

      <div class="panel-row panel-row-top">

        <div class="panel-cell panel-cell-left panel-cell-fill">
          <p class="help-text">
          Click to add the <br/>
          current camera <br/>
          view as an example <br/>
          for that control
          </p>
        </div><!-- ./panel-cell -->

        <div class="panel-cell panel-cell-center">
          <div class="thumb-box">
            <div class="thumb-box-outer">
              <div class="thumb-box-inner">
                <canvas class="thumb" width=224 height=224 id="up-thumb"></canvas>
              </div>
              <button class="record-button" id="up"/><span>Add Sample</span></button>
            </div>
            <p>
              <span id="up-total">0</span> examples
            </p>
          </div>
        </div><!-- ./panel-cell -->

        <div class="panel-cell panel-cell-right panel-cell-fill">
        </div><!-- ./panel-cell -->

      </div><!-- /.panel-row -->
      <div class="panel-row panel-row-middle">
        <div class="panel-cell panel-cell-left">
          <div class="thumb-box">
            <div class="thumb-box-outer">
              <div class="thumb-box-inner">
                <canvas class="thumb" width=224 height=224 id="left-thumb"></canvas>
              </div>
              <button class="record-button" id="left"/><span>Add Sample</span></button>
            </div>
            <p>
              <span id="left-total">0</span> examples
            </p>
          </div>
        </div><!-- ./panel-cell -->

        <div class="panel-cell panel-cell-center panel-cell-fill">
          <img height="108" width="129" src="./images/joystick.png" />
        </div><!-- ./panel-cell -->

        <div class="panel-cell panel-cell-right">
          <div class="thumb-box">
            <div class="thumb-box-outer">
              <div class="thumb-box-inner">
                <canvas class="thumb" width=224 height=224 id="right-thumb"></canvas>
              </div>
              <button class="record-button" id="right"/><span>Add Sample</span></button>
            </div>
            <p>
              <span id="right-total">0</span> examples
            </p>
          </div>
        </div><!-- ./panel-cell -->

      </div><!-- /.panel-row -->

      <div class="panel-row panel-row-bottom">

        <div class="panel-cell panel-cell-left panel-cell-fill">
        </div><!-- ./panel-cell -->

        <div class="panel-cell panel-cell-center">
          <div class="thumb-box">
            <div class="thumb-box-outer">
              <div class="thumb-box-inner">
                <canvas class="thumb" width=224 height=224 id="down-thumb"></canvas>
              </div>
              <button class="record-button" id="down"/><span>Add Sample</span></button>
            </div>
            <p>
              <span id="down-total">0</span> examples
            </p>
          </div>
        </div><!-- ./panel-cell -->

        <div class="panel-cell panel-cell-right panel-cell-fill">
        </div><!-- ./panel-cell -->

      </div><!-- /.panel-row -->


    </div><!-- /.panel -->

  </div><!-- /#controller -->

  <p id="copyright">PAC-MAN&trade; &copy; BANDAI NAMCO Entertainment Inc.</p>

  <script src="https://storage.googleapis.com/tfjs-examples/assets/webcam-transfer-learning/pacman-google.js"></script>
  <script src="index.js"></script>
</body>
</html> */