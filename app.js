require('dotenv').config()

const access_token=process.env.ACCESS_TOKEN
const pixel_id=process.env.PIXEL_ID
const bizSdk = require('facebook-nodejs-business-sdk');
const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;
const DeliveryCategory = bizSdk.DeliveryCategory;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;
const api = bizSdk.FacebookAdsApi.init(access_token);
const express = require("express")
const app = express()

let current_timestamp = Math.floor(Date.now() / 1000);

app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.post('/api/customizeDiet', (req, res) => {
  const{plan,price} = req.body
    const userData = (new UserData())
      // It is recommended to send Client IP and User Agent for Conversions API Events.
      .setClientIpAddress(req.connection.remoteAddress)
      .setClientUserAgent(req.headers['user-agent'])
      .setFbp('fb.1.1558571054389.1098115397')
      .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890');
    const content = (new Content())
      .setId(`${plan.planName}-${plan.typeOfDiet}-${plan.portionSize}-${plan.deliveriesPerWeek}-${plan.offDays}-${plan.planDuration}-${plan.mealType}-${plan.allergies}-${plan.addOns}`)
      .setQuantity(1)
      .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

  
    const customData = (new CustomData())
      .setContents([content])
      .setCurrency('aed')
      .setValue(price);
      
  //Ad
    const serverEvent = (new ServerEvent())
      .setEventName('AddToCart')
      .setEventTime(current_timestamp)
      .setUserData(userData)
      .setCustomData(customData)
      // .setEventId('TEST55065')
      // .setTestEventCode('TEST55065')
      
      .setEventSourceUrl('http://vmeals.ae/meal-plans')
      .setActionSource('website');
  
    const eventsData = [serverEvent];
    const eventRequest = (new EventRequest(access_token, pixel_id))
      .setEvents(eventsData);
  
    eventRequest.execute().then(
      response => {
        console.log('Response: ', response);
        return res.json({message:"success",doc:response})
      },
      err => {
        console.error('Error: ', err);
        return res.json({message:"success",error:err})
      }
    );
  })
app.post('/api/personalInfo', (req, res) => {
  const{plan, personalInfo,price} = req.body
    const userData = (new UserData())
      .setFirstName(personalInfo.firstName)
      .setLastName(personalInfo.lastName)
      .setEmail(personalInfo.email)
      .setPhone(personalInfo.mobileNumber)
      // .setCountry(personalInfo.nationality)
      .setDateOfBirth(personalInfo.dateOfBirth)
      // It is recommended to send Client IP and User Agent for Conversions API Events.
      .setClientIpAddress(req.connection.remoteAddress)
      .setClientUserAgent(req.headers['user-agent'])
      .setFbp('fb.1.1558571054389.1098115397')
      .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890');
    const content = (new Content())
    .setId(`${plan.planName}-${plan.typeOfDiet}-${plan.portionSize}-${plan.deliveriesPerWeek}-${plan.offDays}-${plan.planDuration}-${plan.mealType}-${plan.allergies}-${plan.addOns}`)
    .setQuantity(1)
      .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

  
    const customData = (new CustomData())
      .setContents([content])
      .setCurrency('aed')
      .setValue(price);
      
  //Ad
    const serverEvent = (new ServerEvent())
      .setEventName('AddPersonalInfo')
      .setEventTime(current_timestamp)
      .setUserData(userData)
      .setCustomData(customData)
      // .setEventId('TEST55065')
      // .setTestEventCode('TEST55065')
      
      .setEventSourceUrl('http://vmeals.ae/meal-plans')
      .setActionSource('website');
  
    const eventsData = [serverEvent];
    const eventRequest = (new EventRequest(access_token, pixel_id))
      .setEvents(eventsData);
  
    eventRequest.execute().then(
      response => {
        console.log('Response: ', response);
        return res.json({message:"success",doc:response})
      },
      err => {
        console.error('Error: ', err);
        return res.json({message:"success",error:err})
      }
    );
  })
app.post('/api/initiateCheckout', (req, res) => {
  const{plan, personalInfo,price} = req.body
    const userData = (new UserData())
      .setFirstName(personalInfo.firstName)
      .setLastName(personalInfo.lastName)
      .setEmail(personalInfo.email)
      .setPhone(personalInfo.mobileNumber)
      // .setCountry(personalInfo.nationality)
      .setDateOfBirth(personalInfo.dateOfBirth)
      // It is recommended to send Client IP and User Agent for Conversions API Events.
      .setClientIpAddress(req.connection.remoteAddress)
      .setClientUserAgent(req.headers['user-agent'])
      .setFbp('fb.1.1558571054389.1098115397')
      .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890');
    const content = (new Content())
    .setId(`${plan.planName}-${plan.typeOfDiet}-${plan.portionSize}-${plan.deliveriesPerWeek}-${plan.offDays}-${plan.planDuration}-${plan.mealType}-${plan.allergies}-${plan.addOns}`)
    .setQuantity(1)
      .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

  
    const customData = (new CustomData())
      .setContents([content])
      .setCurrency('aed')
      .setValue(price);
      
  //Ad
    const serverEvent = (new ServerEvent())
      .setEventName('InitiateCheckout')
      .setEventTime(current_timestamp)
      .setUserData(userData)
      .setCustomData(customData)
      // .setEventId('TEST55065')
      // .setTestEventCode('TEST55065')
      
      .setEventSourceUrl('http://vmeals.ae/meal-plans')
      .setActionSource('website');
  
    const eventsData = [serverEvent];
    const eventRequest = (new EventRequest(access_token, pixel_id))
      .setEvents(eventsData);
  
    eventRequest.execute().then(
      response => {
        console.log('Response: ', response);
        return res.json({message:"success",doc:response})
      },
      err => {
        console.error('Error: ', err);
        return res.json({message:"success",error:err})
      }
    );
  })
app.post('/api/purchase', (req, res) => {
  const{plan, personalInfo,price} = req.body
    const userData = (new UserData())
      .setFirstName(personalInfo.firstName)
      .setLastName(personalInfo.lastName)
      .setEmail(personalInfo.email)
      .setPhone(personalInfo.mobileNumber)
      // .setCountry(personalInfo.nationality)
      .setDateOfBirth(personalInfo.dateOfBirth)
      // It is recommended to send Client IP and User Agent for Conversions API Events.
      .setClientIpAddress(req.connection.remoteAddress)
      .setClientUserAgent(req.headers['user-agent'])
      .setFbp('fb.1.1558571054389.1098115397')
      .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890');
    const content = (new Content())
    .setId(`${plan.planName}-${plan.typeOfDiet}-${plan.portionSize}-${plan.deliveriesPerWeek}-${plan.offDays}-${plan.planDuration}-${plan.mealType}-${plan.allergies}-${plan.addOns}`)
    .setQuantity(1)
      .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

  
    const customData = (new CustomData())
      .setContents([content])
      .setCurrency('aed')
      .setValue(price);
      
  //Ad
    const serverEvent = (new ServerEvent())
      .setEventName('Purchase')
      .setEventTime(current_timestamp)
      .setUserData(userData)
      .setCustomData(customData)
      // .setEventId('TEST55065')
      // .setTestEventCode('TEST55065')
      
      .setEventSourceUrl('http://vmeals.ae/meal-plans')
      .setActionSource('website');
  
    const eventsData = [serverEvent];
    const eventRequest = (new EventRequest(access_token, pixel_id))
      .setEvents(eventsData);
  
    eventRequest.execute().then(
      response => {
        console.log('Response: ', response);
        return res.json({message:"success",doc:response})
      },
      err => {
        console.error('Error: ', err);
        return res.json({message:"success",error:err})
      }
    );
  })


  const PORT = process.env.PORT || 5000;
  app.listen (PORT, ()=>{
    console.log("Listening on port " + PORT)
  }
)