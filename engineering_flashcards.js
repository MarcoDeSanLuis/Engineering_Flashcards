class Card{
	constructor(front, back){
		this.front = front; 
		this.back = back;  
	}
}

// electronics cards 
const seriesCircuit = new Card("Series Circuit:", "Voltage:Divided Current:Equal");
const parallelCircuit = new Card("Parallel Circuit:", "Voltage:Equal Current:Divided");
const watt = new Card("Watt:", "SI Unit of Power = 1 joule/second");
const joulesLaw = new Card("Joule's Law:", "P = IV"); 
const ohmsLaw = new Card("Ohm's Law:", "V = IR");
const ferromagnetic = new Card("Ferromagnetic:", "Highly susceptible to magnetization.");       
const neodymium = new Card("Neodymium:", "Rare Earth metal used to produce super strong magnets."); 
const cathode = new Card("Cathode:", "Positive terminal of a battery."); 
const anode = new Card("Anode:", "Negative terminal of a battery.");
const electromagneticInduction = new Card("Electromagnetic Induction", "Current created by moving a wire near a magnet.");
const ampHour = new Card("1 amp-hour battery", "Will run a 1 amp circuit for 1 hour.");
const rheostat = new Card("Rheostat:", "2 terminal variable resistor.");
const rheostatSymbol = new Card("Rheostat Symbol:", "Arrow pointing across resistor."); 
const potentiometer = new Card("Potentiometer:", "3 terminal variable resistor.");
const potentiometerSymbol= new Card("Potentiometer Symbol:", "Arrow pointing into resistor."); 
const fourBandResistor = new Card("Standard-Precision Resistor Bands:", "1st-Band=Number, 2nd-Band=Number, 3rd-Band=Multiplier, 4th-Band=Tolerance"); 
const fiveBandResistor = new Card("High-Precision Resistor Bands:", "1st-Band=Number, 2nd-Band=Number, 3rd-Band=Number, 4th-Band=Multiplier, 5th-Band=Tolerance");
const resistanceSeries = new Card("Total Resistance Series:", "R1 + R2"); 
const resistanceParallel = new Card("Total Resistance Parallel:", "R1*R2/(R1+R2)")
const resistanceParallelMultiples = new Card("Total Resistance Parallel with multiple resistors:","1/((1/R1)+(1/R2)+(1/R3))"); 
const voltageDropSinCurrent = new Card("Formula for Voltage Drop without Current", "(R1/(R1+R2))*Vbatt");


// thermodynamics cards
const firstLawofTherm = new Card("1st Law of Thermodynamics:", "Energy cannot be created or destroyed; It can only change form.");  
const intensiveProperty = new Card("Intensive Property:", "Doesn't depend on mass. Usually rep'd by lowercase symbols"); 
const extensiveProperty = new Card("Extensive Property:", "Depends on mass. Usually rep'd by uppercase symbols");
const mass = new Card("Mass(m):", "Amount of a material used in a system or process.");
const pressure = new Card("Pressure(P):", "A normal force of liquid or gas acting over an area.");
const atmosphericPressureSL = new Card("Atmospheric Pressure @ Sea Level:", "101.325_kPa, 14.7_psia")
const temperature = new Card("Temperature:", "Describes the direction of heat transfer."); 
const density = new Card("Density(p):" , "Mass of a material per unit volume.");
const specificGravity = new Card("Specific Gravity:","Density of a material divided by the density of water at 4 Degrees Celsius") 
const energy = new Card("Energy:", "Capacity to change another system through work, heat transfer or mass transfer.");
const joule = new Card("SI unit of Energy:", "Joule"); 
const macroscopicEnergy = new Card("Macroscopic Energy:", "Can move relative to a reference frame in response to an external force."); 
const microscopicEnergy = new Card("Microscopic Energy:", "Molecular scale Energy."); 
const totalEnergy = new Card("Total Energy:", "Macroscopic_Energy + Microscopic_Energy");
const kineticEnergy = new Card("Kinetic Energy(KE):", "Energy associated with mass moving relative to a reference frame.");
const kineticEnergyFormula = new Card("Kinetic Energy Formula:", "KE = 1/2mV**2"); 
const potentialEnergy = new Card("Potential Energy(PE):", "Energy associated with mass at an elevation above a reference frame.");
const potentialEnergyFormula = new Card("Potential Energy Formula:", "PE = mgz");   
const internalEnergy = new Card("Internal Energy(U):", "Combination of all forms of microscopic energy.");     
const weight = new Card("Weight Formula:", "W = mg"); 
const gravity = new Card("Force of Gravity:", "9.8 m/s**2"); 
const enthalpy = new Card("Enthalpy(H):", "The total energy content of a system.");
const enthalpyFormula = new Card("Enthalpy Formula:", "H = U + PV");
const specificHeat = new Card("Specific Heat:", "How much a material heats up when a given amount of energy is applied to it.");
const entropy = new Card("Entropy:", "The measure of order and disorder of a system.");
const highEntropy = new Card("High Entropy:", "High degree of chaos or disorder in a system.");
const lowEntropy = new Card("Low Entropy:", "Low degree of chaos or disorder in a system.");
const quality = new Card("Quality(x):", "The percentage of vapor in a liquid vapor mix.");
const qualityFormula = new Card("Quality Formula:", "x = m.g/m.f + m.g");
const isochoricPath = new Card("Isochoric/Isometric Path", "Path with constant volume.");
const isobaricPath = new Card("Isobaric Path", "Path with constant pressure.");
const isothermalPath = new Card("Isothermal Path", "Path with constant temperature.");
const isenthalpicPath = new Card("Isenthalpic Path", "Path with constant enthalpy.");
const isentropicPath = new Card("Isentropic Path", "Path with constant entropy.");
const adiabaticPath = new Card("Adiabatic Path", "Path with no heat transfer"); 
const reversiblePath = new Card("Reversible Path", "Returns to the initial state unchanged.");         

// physics cards
const torque = new Card("Torque:", "Rotational Force");
const torqueFormula = new Card("Torque Formula:", "T = Fr");
const workDistanceShaftFormula = new Card("Turning Shaft Work Distance Formula:", "s = (2πr)n"); //r = radius, n = number of rotations  
const SI = new Card("SI:", "International System (Metric)");
const newtons1st = new Card("Newton's 1st Law of Motion:", "An object at rest or moving in a straight line will remain so unless affected by an external force."); 
const newtons2nd = new Card("Newton's 2nd Law of Motion:", "F = MA");
const newtons3rd = new Card("Newton's 3rd Law of Motion:", "For every force there is an equal and opposite force."); 
const horsePower = new Card("Horsepower:", "Unit of power = 745.7 Watts");
const regenerativeBraking = new Card("Regenerative Braking:", "Type of breaking where energy is stored for reuse.");
         
const frontContent = document.getElementById('front_content'); 
const backContent = document.getElementById('back_content');
const electStudy = document.getElementById('elect_study'); 
const electNextCard = document.getElementById('elect_next_card');
const thermStudy = document.getElementById('therm_study');
const thermNextCard = document.getElementById('therm_next_card');
const physicsStudy = document.getElementById('physics_study');
const physicsNextCard = document.getElementById('physics_next_card');

/*Options are set to false initally. When an option is clicked, the event listener sets
sets the approprate option to true.*/ 
let electOption = false; 
let thermOption = false; 
let physicsOption = false;

electCards = [seriesCircuit, parallelCircuit, watt, ohmsLaw, joulesLaw, ferromagnetic, neodymium, cathode, anode, electromagneticInduction, 
	ampHour, rheostat, rheostatSymbol, potentiometer, potentiometerSymbol, fourBandResistor, fiveBandResistor, resistanceSeries,
	resistanceParallel,resistanceParallelMultiples, voltageDropSinCurrent]
	
thermCards = [firstLawofTherm, intensiveProperty, extensiveProperty, mass, pressure, atmosphericPressureSL, temperature,
	density, specificGravity, energy, joule, macroscopicEnergy, microscopicEnergy, totalEnergy, kineticEnergy, kineticEnergyFormula, potentialEnergy, 
	potentialEnergyFormula, internalEnergy,	weight, gravity, enthalpy, enthalpyFormula, specificHeat, entropy, highEntropy, lowEntropy, quality, 
	qualityFormula, isochoricPath, isobaricPath, isothermalPath, isenthalpicPath, isentropicPath, adiabaticPath, reversiblePath]

physicsCards = [torque, torqueFormula, workDistanceShaftFormula, SI, newtons1st, newtons2nd,
	newtons3rd, horsePower, regenerativeBraking] 
 

function randomChoice(array){
	return array[Math.floor(Math.random() * array.length)]; 
}

function hideElectNext(){
	electNextCard.style.display = 'none'; 
}

function hideThermNext(){
	thermNextCard.style.display = 'none'; 
}

function hidePhysicsNext(){
	physicsNextCard.style.display = 'none'; 
}

function electContent(){
		frontContent.textContent = electCard.front;
		backContent.textContent = electCard.back;
}

function thermContent(){
		frontContent.textContent = thermCard.front;
		backContent.textContent = thermCard.back;
}

function physicsContent(){
		frontContent.textContent = physicsCard.front;
		backContent.textContent = physicsCard.back;
}

function hideStudyOptions(){
		electStudy.style.display = 'none';
		thermStudy.style.display = 'none';
		physicsStudy.style.display = 'none'; 
}

function showStudyOptions(){
		electStudy.style.display = 'block';
		thermStudy.style.display = 'block';
		physicsStudy.style.display = 'block'; 
}

function hideYesNo(){
	if (electOption){
		electCard = electCards[0];
		electContent();
	}else if (thermOption){
		thermCard = thermCards[0]; 
		thermContent(); 
	}else{
		physicsCard = physicsCards[0]; 
		physicsContent(); 
	}; 
	repeatQuestion.style.display = "none"; 
	optionYes.style.display = "none"; 
	optionNo.style.display = "none";
}

function showYesNo(){
	repeatQuestion.style.display = "block"; 
	repeatQuestion.textContent = "Repeat?";
	optionYes.style.display = "block";
	optionYes.textContent = "Yes"; 
	optionNo.style.display = "block";
	optionNo.textContent = "No";
} 	
	
function cardStudy(){
	//hides all next arrows until an option is clicked
	hideElectNext();
	hideThermNext();
	hidePhysicsNext();
	electStudy.addEventListener('click', ()=>{
		/*option is set to true so after the cards have all been cycled through
		the "hideYesNo()" function will repeat the same deck if yes is selected*/
		electOption = true; 
		//puts the first card of the deck into play
		electCard = electCards[0];
		//counter for switch
		let i = 1;
		// sets front and back content for cards
		electContent();
		electNextCard.style.display = 'inline';
		//hides the electronics, thermodynamics, physics options initially displayed
		hideStudyOptions();
		//initiates electronic study when electronics option is clicked 
		electNextCard.addEventListener('click', ()=>{
			//switch cycles through the card deck by iterating through the list of cards
			switch(i){ 
				case 1:
					electCard = electCards[1];
					electContent(); 
					break;
				case 2:
					electCard = electCards[2];
					electContent(); 
					break;
				case 3:
					electCard = electCards[3];
					electContent(); 
					break;
				case 4:
					electCard = electCards[4];
					electContent(); 
					break;
				case 5:
					electCard = electCards[5];
					electContent(); 
					break;
				case 6:
					electCard = electCards[6];
					electContent(); 
					break;
				case 7:
					electCard = electCards[7];
					electContent(); 
					break;
				case 8:
					electCard = electCards[8];
					electContent(); 
					break;
				case 9:
					electCard = electCards[9];
					electContent(); 
					break;
				case 10:
					electCard = electCards[10];
					electContent(); 
					break;
				case 11:
					electCard = electCards[11];
					electContent(); 
					break;
				case 12:
					electCard = electCards[12];
					electContent(); 
					break;
				case 13:
					electCard = electCards[13];
					electContent(); 
					break;
				case 14:
					electCard = electCards[14];
					electContent(); 
					break;
				case 15:
					electCard = electCards[15];
					electContent(); 
					break;
				case 16:
					electCard = electCards[16];
					electContent(); 
					break;
				case 17:
					electCard = electCards[17];
					electContent(); 
					break;
				case 18:
					electCard = electCards[18];
					electContent(); 
					break;
				case 19:
					electCard = electCards[19];
					electContent(); 
					break;
				case 20:
					electCard = electCards[20];
					electContent(); 
					break;
				case 21:
					showYesNo();
					hideElectNext();
					
					// repeats the same sequence
					optionYes.addEventListener('click', ()=>{
						hideYesNo();
						electNextCard.style.display = 'inline';
						i = 1; 
					});
					
					// starts a new sequence
					optionNo.addEventListener('click', ()=>{
						hideYesNo();
						showStudyOptions();						
					});
			}
			i++;
		});
	});
	thermStudy.addEventListener('click', ()=>{
		/*option is set to true so after the cards have all been cycled through
		the "hideYesNo()" function will repeat the same deck if yes is selected.*/
		thermOption = true;
		//puts the first card of the deck into play
		thermCard = thermCards[0];
		//counter for switch
		let i = 1;
		// sets front and back content for cards
		thermContent();
		thermNextCard.style.display = 'inline';
		//hides the electronics, thermodynamics, physics options initially displayed
		hideStudyOptions();
		//initiates thermodynamics study when thermodynamics option is clicked 
		thermNextCard.addEventListener('click', ()=>{
			//switch cycles through the card deck by iterating through the list of cards
			switch(i){ 
				case 1:
					thermCard = thermCards[1];
					thermContent(); 
					break;
				case 2:
					thermCard = thermCards[2];
					thermContent(); 
					break;
				case 3:
					thermCard = thermCards[3];
					thermContent(); 
					break;
				case 4:
					thermCard =	thermCards[4];
					thermContent(); 
					break;
				case 5:
					thermCard = thermCards[5];
					thermContent(); 
					break;
				case 6:
					thermCard = thermCards[6];
					thermContent(); 
					break;
				case 7:
					thermCard = thermCards[7];
					thermContent(); 
					break;
				case 8:
					thermCard = thermCards[8];
					thermContent(); 
					break;
				case 9:
					thermCard = thermCards[9];
					thermContent(); 
					break;
				case 10:
					thermCard = thermCards[10];
					thermContent(); 
					break;
				case 11:
					thermCard = thermCards[11];
					thermContent(); 
					break;
				case 12:
					thermCard = thermCards[12];
					thermContent(); 
					break;
				case 13:
					thermCard = thermCards[13];
					thermContent(); 
					break;
				case 14:
					thermCard = thermCards[14];
					thermContent(); 
					break;
				case 15:
					thermCard = thermCards[15];
					thermContent(); 
					break;
				case 16:
					thermCard = thermCards[16];
					thermContent(); 
					break;
				case 17:
					thermCard = thermCards[17];
					thermContent(); 
					break;
				case 18:
					thermCard = thermCards[18];
					thermContent(); 
					break;
				case 19:
					thermCard = thermCards[19];
					thermContent(); 
					break;
				case 20:
					thermCard = thermCards[20];
					thermContent(); 
					break;
				case 21:
					thermCard = thermCards[21];
					thermContent(); 
					break;
				case 22:
					thermCard = thermCards[22];
					thermContent(); 
					break;
				case 23:
					thermCard = thermCards[23];
					thermContent(); 
					break;
				case 24:
					thermCard = thermCards[24];
					thermContent(); 
					break;
				case 25:
					thermCard = thermCards[25];
					thermContent(); 
					break;
				case 26:
					thermCard = thermCards[26];
					thermContent(); 
					break;
				case 27:
					thermCard = thermCards[27];
					thermContent(); 
					break;
				case 28:
					thermCard = thermCards[28];
					thermContent(); 
					break;
				case 29:
					thermCard = thermCards[29];
					thermContent(); 
					break;
				case 30:
					thermCard = thermCards[30];
					thermContent(); 
					break;
				case 31:
					thermCard = thermCards[31];
					thermContent(); 
					break;
				case 32:
					thermCard = thermCards[32];
					thermContent(); 
					break;
				case 33:
					thermCard = thermCards[33];
					thermContent(); 
					break;
				case 34:
					thermCard = thermCards[34];
					thermContent(); 
					break;
				case 35:
					thermCard = thermCards[35];
					thermContent(); 
					break;
				case 36:			
					showYesNo();
					hideThermNext();
					
					// repeats the same card stack 
					optionYes.addEventListener('click', ()=>{
						hideYesNo();
						thermNextCard.style.display = 'inline';
						i = 1; 
					});
					
					// shows options again 
					optionNo.addEventListener('click', ()=>{
						hideYesNo();
						showStudyOptions();						
					});
			}
			i++;
		});
	});
	physicsStudy.addEventListener('click', ()=>{
		/*option is set to true so after the cards have all been cycled through
		the "hideYesNo()" function will repeat the same deck if yes is selected.*/
		physicsOption = true;
		//puts the first card into play 
		physicsCard = physicsCards[0];
		//counter for switch
		let i = 1;
		// sets front and back content for cards
		physicsContent();
		physicsNextCard.style.display = 'inline';
		//hides the electronics, thermodynamics, physics options initially displayed
		hideStudyOptions();
		//initiates physics study when physics option is clicked
		physicsNextCard.addEventListener('click', ()=>{
			switch(i){
				//switch cycles through the card deck by iterating through the list of cards
				case 1:
					physicsCard = physicsCards[1];
					physicsContent(); 
					break;
				case 2:
					physicsCard = physicsCards[2];
					physicsContent(); 
					break;
				case 3:
					physicsCard = physicsCards[3];
					physicsContent(); 
					break;
				case 4:
					physicsCard = physicsCards[4];
					physicsContent(); 
					break;
				case 5:
					physicsCard = physicsCards[5];
					physicsContent(); 
					break;
				case 6:
					physicsCard = physicsCards[6];
					physicsContent(); 
					break;
				case 7:
					physicsCard = physicsCards[7];
					physicsContent(); 
					break;
				case 8:
					physicsCard = physicsCards[8];
					physicsContent(); 
					break;
				case 9:			
					showYesNo();
					hidePhysicsNext();
					
					// repeats the same sequence
					optionYes.addEventListener('click', ()=>{
						hideYesNo();
						physicsNextCard.style.display = 'inline';
						i = 1; 
					});
					
					// starts a new sequence
					optionNo.addEventListener('click', ()=>{
						hideYesNo();
						showStudyOptions();						
					});
			}
			i++;
		});
	});
}
cardStudy();
