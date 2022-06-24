import React from 'react'

export const ProjectCard = (props) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Title</h2>
                <p>Hello world{props.desc}</p>
                <div class="card-action justify-end">
                    <button class="btn btn-primary">Buy now</button>
                </div>
            </div>
        </div>
    );
}
