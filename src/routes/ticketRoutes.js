import { create } from "../controllers/tickets/create.js";
import { index } from "../controllers/tickets/index.js";
import { update } from "../controllers/tickets/update.js";
import { updateStatus } from "../controllers/tickets/updateStatus.js";
import { remove } from "../controllers/tickets/remove.js";

export const ticketRoutes = [
    {
        method: "POST",
        path: "/ticket",
        controller: create
    },
    {
        method: "GET",
        path: "/ticket",
        controller: index
    },
    {
        method: "PUT",
        path: "/ticket/:id",
        controller: update
    },
    {
        method: "PATCH",
        path: "/ticket/:id/close",
        controller: updateStatus
    },
    {
        method: "DELETE",
        path: "/ticket/:id",
        controller: remove
    },
]