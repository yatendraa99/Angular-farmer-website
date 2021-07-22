export class Crop{

    crop_name;
    water_type;
    soil_type;  
    desc:any;
   place:any;
   life_time:any;

    
    constructor()
    {
        this.soil_type = {
            sand:false,
            silt:false,
            clay:false,
            
        
        };
        
        this.water_type={
            salty:false,
            sline:false
        }
        this.place={
            jammu:false,
            delhi:false,
            rajasthan:false,
            up:false
        }
    }
    


   

}