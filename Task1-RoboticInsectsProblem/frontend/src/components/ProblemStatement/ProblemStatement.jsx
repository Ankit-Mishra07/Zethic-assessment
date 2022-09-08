import React from "react";

const ProblemStatement = () => {
  return (
    <div>
      <h3>Task 1 - Robotic Insect</h3>
      <details className="details__problem">
        <summary>Problem Statement</summary>
        <div>
          <h4>--== PROBLEM ==--</h4>
          <p>
            A spy agency has built a squad of robotic insects that are small
            enough to infiltrate enemy buildings. The enemy headquarters has
            several rectangular rooms which must be navigated by the insects in
            order to reach and photograph secret documents.
          </p>
          <p>
            An insect's location is represented by x and y coordinates. It's
            heading is represented by one of four cardinal compass points. The
            room is divided into a grid to simplify navigation. An example
            position could be (0, 0, N), which means that the insect is at the
            bottom-left corner and facing north.
          </p>
          <ul>
            <p>
              Being a robot with limited computing capacity, the insect is only
              capable of understanding very simple commands:
            </p>
            <li>L -- makes the insect turn left 90 degrees</li>
            <li>R -- makes the insect turn right 90 degrees</li>
            <li>F -- make the insect move forward 1 square</li>
          </ul>

          <p>Assume the square directly north of (x, y) is (x, y+1).</p>

          <h4>--== INPUT ==--</h4>
          <p>
            The first line of input represents the size of the room with the
            base index being (0, 0).
          </p>

          <p>
            The rest of the input is data pertaining to the insects that have
            been deployed. Each insect has two lines of input. The first line
            gives the insect's position, and the second line is the sequence of
            commands that tell the insect where to navigate
          </p>

          <p>
            Each insect will finish it's navigation sequentially, which means
            that the second insect wont start moving until the first one has
            finished moving.
          </p>

          <h4>--== OUTPUT ==--</h4>

          <p>
            The output for each insect should be its final coordinates and
            heading.
          </p>

          <h4>--== SAMPLE INPUT AND OUTPUT ==--</h4>

          <ul>
            <li>Input:</li>
            <li>5 5</li>
            <li>1 2 N</li>
            <li>LFLFLFLFF</li>
            <li>3 3 E</li>
            <li>FFRFFRFRRF</li>
          </ul>

          <ul>
            <li>Expected output:</li>
            <li>1 3 N</li>
            <li>5 1 E</li>
          </ul>
        </div>
      </details>
    </div>
  );
};

export default ProblemStatement;
