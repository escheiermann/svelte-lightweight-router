import { get } from "svelte/store";
import { loggedIn } from "./auth";

export function authGuard(path) {
    return get(loggedIn) ? true : "login";
}
