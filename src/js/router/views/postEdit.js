import { authGuard } from "../../utilities/authGuard";
import { onUpdatePost } from "../../ui/post/update.js";

authGuard();

const form = document.getElementById('edit-posts-form');

form.addEventListener("submit", onUpdatePost);