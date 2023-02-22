const usersDB = [
    {
        id: 1,
        name : "Gustavo",
        time : "12:45pm" ,
        comment:"No sleep for the wicked",
    },

    {
        id: 2,
        name : "King Asher",
        time : "12:43pm" ,
        comment:"A true king of the World",
    },

    {
        id: 3,
        name : "Daniflaze",
        time : "12:40pm" ,
        comment:"thankGod its friday",
    },

    {
        id: 4,
        name : "Dapo",
        time : "12:35pm" ,
        comment:"i loves to eat",
    },

    {
        id: 5,
        name : "Mosassy",
        time : "12:30pm" ,
        comment:"An exceptional event planner",
    },

    {
        id: 6,
        name : "Mkay",
        time : "12:25pm" ,
        comment:"A real Gee",
    },

];

const displayFeed = document.getElementById("displayFeed");

let html = "";

usersDB.map((user, index, aray)=> {
    html = 
    html +
    `
    <div class="timeline-feed-grp">
                <div class="timeline-feed-grp-col-1">
                    <img src="./download.jpg" alt="">
                </div>

                <div class="timeline-feed-grp-col-2">
                    <div class="timeline-feed-grp-col-2-row-1">
                        ${user.name}
                    </div>
                    <div class="timeline-feed-grp-col-2-row-2">
                       ${user.time}
                    </div>
                    <div class="timeline-feed-grp-col-2-row-3">
                        ${user.comment}
                    </div>
                </div>
            </div>
    `;
});

displayFeed.innerHTML = html;