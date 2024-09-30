import { deletePost } from "src/js/api/post/delete.js";

export async function onDeletePost(event) {
    const deleteBtn = document.getElementById('delete-btn');
    const dropDown = document.getElementById('post-dropdown');

    deleteBtn.addEventListener('click', async () => {
        const confirmed = confirm('Are you sure you want to delete this post?');
        if (confirmed) {
            const postId = dropDown.value;
            await deletePost(postId);
            alert('post deleted successfully!');
            location.reload();
        }
    })
}