import {TypeOf, z} from "zod";
import validate from "../middleware/validate";
import { Register } from "../controllear/user.controllear";

export const Registertype = z.object({
    body:z.object({
        username:z.string({
            required_error:"username is requerd",
            invalid_type_error:"الرجاء ادخال حروف "
        })
        .max(6,"يجب ان يكون الاسم افل من 6حروف")
        .min(2,"يجب ان يكون الاسم اكثر من حرفين"),
    
        passeord:z.string({
            required_error:"passeord is requerd",
            invalid_type_error:" الرجاء كتابة حروف",
    }),
    email:z.string({
        required_error:"email is requerd",
        invalid_type_error:" الرجاء كتابة حروف",
    })
    .email()
    })
    })


export const Logintype = z.object({
    body:z.object({
        username:z.string({
            required_error:"username is required",
            invalid_type_error:"username is invalid"
        }).max(10, "username should be less than 10 characters")
          .min(2,"username should be more than 2 characters"),
          passeord:z.string({
            required_error:"username is required",
            invalid_type_error:"username is invalid"
        })
    })
})


export type  Registertype = TypeOf<typeof Registertype>["body"]
export type Logintypeschema = TypeOf<typeof Logintype>["body"];


