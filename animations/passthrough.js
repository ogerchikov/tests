registerAnimator('passthrough', class {
    	
	constructor(options) {        
		this.startTime_ = 0;
    }
	optionsChanged(options) {
      this.startTime_ = options.startTime;
	}
	state(){
		return true;
	}
	animate(currentTime, effect) {
		// if(this.startTime_ == undefined)
	    // {
		  // this.startTime_ = Number(new Date().getTime());
	    // }
		// if((Number(new Date().getTime()) - this.startTime_) > 1000)
		  // currentTime = 0;
		effect.localTime = currentTime - this.startTime_;
		/*
    if (isNaN(currentTime)) {
      effect.localTime = 2000;
    } else {
      effect.localTime = 1000;
    }		
	*/
	}
  });