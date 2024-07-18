import URLs from "@/api/urls";
import { http, HttpResponse } from "msw";

export const handlers = [

    http.get(URLs.mswTest, ()=>{

        return HttpResponse.json({
            no : 0,
            id : "MSW ID",
            todo : "오늘의 할일",
        });
    })

]