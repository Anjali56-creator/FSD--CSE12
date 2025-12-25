async function name(params) {
    //const comment=await fetch("usercomment");
    //const profile=await fetch("userprofile");
    //instead of waiting for one to complete and then other we can do both in parallel

    const [comment,photo,chat]=await Promise.all([fetch("usercomment"),fetch("photo"),fetch("chat")]);
    
}