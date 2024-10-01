import { authGuard } from "../../utilities/authGuard";
import { onUpdatePost } from "../../ui/post/update.js";

authGuard();

const form = document.getElementById('editPostForm');

form.addEventListener("submit", onUpdatePost);