import { writable } from "svelte/store";

const activeListingsStore = writable([
  {
    id: "1",
    image: "src/lib/assets/2-2.webp",
    price: "$323,000",
    lotSize: "3,420.00 sqft",
    houseSize: "623 sqft",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1079121010~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODU5ODM3NjU4Iiwic2V0a2V5IjoiMzk4IiwiZW1haWwiOiJsYWxvc29jY2VyMzA3QGdtYWlsLmNvbSIsInJlc291cmNlaWQiOjAsImFnZW50aWQiOjIyMDYyMTYsIlZpZXdNb2RlIjoiMSJ9&searchId=90cc7b05-6616-34e8-85eb-b6e172ca83ef"
  },
  {
    id: "2",
    image: "src/lib/assets/3-1.webp",
    price: "$19,000",
    lotSize: "3,400.00 sqft",
    houseSize: "N/A",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1079446955~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODU5ODM3NjY5Iiwic2V0a2V5IjoiMzM0IiwiZW1haWwiOiJsYWxvc29jY2VyMzA3QGdtYWlsLmNvbSIsInJlc291cmNlaWQiOjAsImFnZW50aWQiOjIyMDYyMTYsImxpc3RpbmdpZCI6IjQyMTAwMzYwMyIsIlZpZXdNb2RlIjoiMSJ9&searchId=e645d2e1-6fb3-383e-ab3d-168da2d8d11c"
  },
  {
    id: "3",
    image: "src/lib/assets/4-1.webp",
    price: "$5,500",
    lotSize: "3,440.00 sqft",
    houseSize: "N/A",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1077521619~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODU5ODM3NjY5Iiwic2V0a2V5IjoiMzM0IiwiZW1haWwiOiJsYWxvc29jY2VyMzA3QGdtYWlsLmNvbSIsInJlc291cmNlaWQiOjAsImFnZW50aWQiOjIyMDYyMTYsImxpc3RpbmdpZCI6IjQxOTAxNTk4NSIsIlZpZXdNb2RlIjoiMSJ9&searchId=e645d2e1-6fb3-383e-ab3d-168da2d8d11c"
  },
  {
    id: "4",
    image: "src/lib/assets/5-1.webp",
    price: "$5,500",
    lotSize: "3,480.00 sqft",
    houseSize: "N/A",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1077521512~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODU5ODM3NjY5Iiwic2V0a2V5IjoiMzM0IiwiZW1haWwiOiJsYWxvc29jY2VyMzA3QGdtYWlsLmNvbSIsInJlc291cmNlaWQiOjAsImFnZW50aWQiOjIyMDYyMTYsImxpc3RpbmdpZCI6IjQxOTAxNTc4MCIsIlZpZXdNb2RlIjoiMSJ9&searchId=e645d2e1-6fb3-383e-ab3d-168da2d8d11c"
  },
  {
    id: "5",
    image: "src/lib/assets/6-1.webp",
    price: "$5,900",
    lotSize: "3,720.00 sqft",
    houseSize: "N/A",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1077521409~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODU5ODM3NjY5Iiwic2V0a2V5IjoiMzM0IiwiZW1haWwiOiJsYWxvc29jY2VyMzA3QGdtYWlsLmNvbSIsInJlc291cmNlaWQiOjAsImFnZW50aWQiOjIyMDYyMTYsImxpc3RpbmdpZCI6IjQxOTAxNTM1NCIsIlZpZXdNb2RlIjoiMSJ9&searchId=e645d2e1-6fb3-383e-ab3d-168da2d8d11c"
  },
  {
    id: "6",
    image: "src/lib/assets/7-1.webp",
    price: "$449,000",
    lotSize: "12,744.00 sqft",
    houseSize: "N/A",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1028382504~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODU5ODM3NjY5Iiwic2V0a2V5IjoiMzM0IiwiZW1haWwiOiJsYWxvc29jY2VyMzA3QGdtYWlsLmNvbSIsInJlc291cmNlaWQiOjAsImFnZW50aWQiOjIyMDYyMTYsImxpc3RpbmdpZCI6IjM4Njk5MjkyNyIsIlZpZXdNb2RlIjoiMSJ9&searchId=e645d2e1-6fb3-383e-ab3d-168da2d8d11c"
  }
]);


export default activeListingsStore;
