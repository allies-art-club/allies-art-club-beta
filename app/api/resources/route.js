

export default function GET(req){
    try{
        const article= req.url.split('/')[2]+'.pdf';
        return Response.status(200).download(path.join(__dirname,'..','..','..','utils','resources',req.body.category,article));

    }
    catch(e){
        e.status=500;
        e.input=req.body;
        Response.status(200).json()
    }

}