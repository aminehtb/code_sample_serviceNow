/*
*created on 26/02/2019 by amine
*finds similar record to the one provided to the solution
*/
var predictor = new MLPredictor();
var solution = predictor.findActiveSolution('ml_x_302527_global_sample_solution');
//sample record used to find similar records to it  
var rec = new GlideRecord('incident');
rec.get('number','INC0000044');

var options  = {
	top_n:10,//top 10 records sorted by the confidence
	apply_threshold:true
};
var result = predictor.getPredictions(rec,solution,options);
//loop on all result
result.forEach(function(element){
	var obj  = JSON.parse(element.toJSONString());
	//get the record
	var rec1 = new GlideRecord('incident');
	rec1.get('sys_id',obj.outcome);
	//display the short descriptions
	gs.warn("amine "+rec1.getDisplayValue('short_description'));
});
