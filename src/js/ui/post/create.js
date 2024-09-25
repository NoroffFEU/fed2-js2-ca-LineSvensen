import { createPost } from '../../api/post/create.js';

export async function onCreatePost(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    const media = event.target.media.value;
    const tags = Array.from(event.target.querySelectorAll('input[name="tags[]"]')).map(function(input) {
        return input.value.trim().toLowerCase();
    }).filter(function(tag) {
        return tag;
    });
    try {
        const response = await createPost({ title, body, media, tags });
        if (response.ok) {
            alert('Your post was created successfully and is now posted!')
            event.target.reset();
        } else {
            alert('Ops! Error. Could not create post.');
        }
    } catch (error) {
        console.error('Error occurred:', error);
        throw error();
    }
}

document.getElementById('create-form').addEventListener('submit', onCreatePost);

const addTagsButton = document.getElementById('add-tag');
const tagsContainer = document.getElementById('tags-container');

addTagsButton.addEventListener('click', () => {
    const newTagInput = document.createElement('input');
    newTagInput.setAttribute('type','text');
    newTagInput.setAttribute('name','tags[]');
    newTagInput.setAttribute('placeholder','enter a tag');
    tagsContainer.appendChild(newTagInput);
});


