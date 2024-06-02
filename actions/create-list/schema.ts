import { z } from "zod";

export const CreateList = z.object({
    title: z.string({
        required_error: "Title is required",
        invalid_type_error: "Title is required"
    }).min(3, {
        message: "Minimum length of 3 letters is required"
    }),
    boardId: z.string()
})