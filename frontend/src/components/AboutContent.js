import "./AboutContentStyles.css";

import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Кто я?</h1>
            <p>
                Anim tempor sint velit cupidatat occaecat aute ipsum tempor est qui labore duis proident velit. In Lorem aliquip sit eu pariatur sint sit irure deserunt anim et sit. Esse ex elit non aute nostrud laboris quis quis quis excepteur. Sit aliquip irure ipsum proident est amet duis aliqua sunt velit.

In adipisicing deserunt exercitation aliqua nostrud pariatur fugiat occaecat duis ex magna exercitation. Ea incididunt dolore magna magna. Sit adipisicing esse reprehenderit nisi id velit do non cillum est. Pariatur aute dolor sint ea tempor anim fugiat labore aliqua officia aliquip irure ipsum cillum. Tempor dolor amet ea adipisicing eiusmod mollit sunt esse et.

Mollit quis irure aliqua officia officia velit proident aliquip quis voluptate sunt cillum. Minim do est aliqua aute aute consequat consequat qui et dolor. Adipisicing amet tempor non enim minim ea adipisicing sint Lorem labore ad irure irure occaecat. Velit quis officia sit velit deserunt enim esse esse sunt anim pariatur ad et cillum.

Do magna sit laboris qui eiusmod veniam in consequat laboris do velit deserunt aute. Voluptate occaecat id cupidatat minim exercitation irure. Tempor sit id aliqua nostrud aliqua adipisicing non consectetur dolor. Proident ad tempor nisi adipisicing culpa nulla cillum fugiat elit ut. Pariatur dolore anim nostrud tempor magna do aliquip exercitation voluptate est nostrud ea ut duis.

Laboris aliquip consectetur magna ullamco reprehenderit sunt qui incididunt amet minim nulla. Eiusmod consequat commodo ea cupidatat proident aute officia culpa veniam ut enim velit. Dolor Lorem consectetur enim nostrud irure aliquip consequat anim. Dolor tempor laboris sunt nisi enim.
            </p>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img" alt="" />
                </div>
                <div className="img-stack bottom">
                    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
