
(function(global,$){

    console.log(global,$);
    var Greetr=function(firstName,lastName,language){
        return new Greetr.init( firstName, lastName, language);
    }
    var supportedLang=['en','es'];
    var greetings={en:"Hello",es:"Hola"};
    var formalGreetings={en:"Greetings",es:"Saludos"};
    var logMessages={en:"Logged In",es:"Inicio session"};

    Greetr.prototype={
        getFullName:function(){
                    return this.firstName + " "+ this.lastName
        },
        validate:function(){
            if(supportedLang.indexOf(this.language) === -1){
                    throw "Invalid Language";
            }
        },
        greeting:function(){
            return greetings[this.language]+ " " +this.firstName +"..!"; 
        },
        formalGreetings:function(){
            return formalGreetings[this.language] + "" + this.getFullName();
        },
        greet:function(formal){
            var msg;
            if(formal){
                msg=this.formalGreetings();
            }else{
                msg=this.greeting();
            }

            if(console){
                console.log(msg);
            }

            return this;
        },
        log:function(){
            if(console){
                console.log(logMessages[this.language] + ':' + this.getFullName());
            }
            return this;
        },
        setLang:function(lang){
            this.language=lang;
            this.validate();
            return this;
        }
    };

    Greetr.init=function(firstName,lastName,language){
        var self=this;

        self.firstName = firstName || '';
        self.lastName  = lastName || '';
        self.language  = language || 'en';
        self.validate();
    }
    Greetr.init.prototype=Greetr.prototype;

  
    global.Greetr= global.G$ = Greetr;


}( window, jQuery));