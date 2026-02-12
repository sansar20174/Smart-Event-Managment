const form=document.querySelector("form");

const eventlist=document.getElementById("eventList")
const sampleBtn=document.getElementById("sampleBtn")
const domOutput=document.getElementById("domOutput")
const clearBtn=document.getElementById("clearBtn")

function createEventCard(title, date, description, category){
    const eventCard=document.createElement("div");
    eventCard.classList.add("event-card");

    eventCard.innerHTML=`
    <h3>${title}</h3>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Description:</strong> ${description}</p>
    <p><strong>Category:</strong> ${category}</p>
    <button class="delete-btn">X</button>
    `;
    eventCard.querySelector(".delete-btn").addEventListener("click",()=>{
      eventCard.remove();
    });
    eventlist.appendChild(eventCard);
}

form.addEventListener("submit",function(event){
    event.preventDefault();

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("desc").value;
    const category = document.getElementById("category").value;

    const eventData = {
      eventtitle: title,
      eventdate: date,
      eventdescription: description,
      eventcategory: category,
    };

    console.log("eventData");
    createEventCard(title, date, description, category);
    form.reset();
    if (domOutput) domOutput.textContent = "Event added successfully!";
  });

  clearBtn.addEventListener("click", function(){
    eventlist.innerHTML = "";
    if (domOutput) domOutput.textContent = "All events cleared!"
  });

  sampleBtn.addEventListener("click", function(){

   const sampleeventData=[
    {
      eventtitle: "Wedding Ceremony",
      eventdate: "10-02-2026",
      eventdescription: "An elegant wedding ceremony with close family and friends in Railway Colony at Punjabi Bagh.",
      eventcategory: "Social",
    },
    {
      eventtitle: "Reception Party",
      eventdate: "12-02-2026",
      eventdescription: "A grand reception party to celebrate the newlyweds with music, dance, and delicious food at Karan Vatika.",
      eventcategory: "Social",
    },
  ];

  sampleeventData.forEach((item)=>{
    createEventCard(item.eventtitle, item.eventdate, item.eventdescription, item.eventcategory);
  });
  });
document.addEventListener("keydown", function(event){
    document.getElementById("domOutput").textContent =
        "Key Pressed: " + event.key;
});