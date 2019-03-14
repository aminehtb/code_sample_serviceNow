var incident_record = new GlideRecord('x_302527_ai_search_table_source');
incident_record.initialize();
incident_record.name = 'incident source';
incident_record.u_table_name = 'incident';
var s = '<div><h2>result from table source incident</h2></div>';
s=s.split('<').join('&lt;');
s=s.split('>').join('&gt;');
incident_record.template = '<p>'+s+'</p>';
incident_record.u_columns = 'ecdbdf75dd0323007850f2ee37a03989,2cdbdf75dd0323007850f2ee37a03997';
incident_record.u_frequency = 1;
incident_record.u_index_time = new GlideDateTime();
incident_record.insert();
var incident_record_id = incident_record.insert();

//create the contextual search script source
var cxs_record = new GlideRecord('x_302527_ai_search_script_source');
cxs_record.initialize();
cxs_record.name = 'contextual search script';
s = '<div><h2>result from table source incident</h2></div>';
s=s.split('<').join('&lt;');
s=s.split('>').join('&gt;');
incident_record.template = '<p>'+s+'</p>';
cxs_record.script="var rec = new GlideRecord('incident');"
var cxs_record_id = cxs_record.insert();
//gs.warn('script : '+cxs_record_id);

//create a search config 
var search_config_record = new GlideRecord('x_302527_ai_search_search_config');
search_config_record.initialize();
search_config_record.name = 'default search config';
var search_config_record_id = search_config_record.insert();
var search_config_sources = new GlideRecord('x_302527_ai_search_m2m_search_configs_sources');
search_config_sources.initialize();
search_config_sources.search_config = search_config_record_id;
search_config_sources.source = incident_record_id;
search_config_sources.insert();
search_config_sources.initialize();
search_config_sources.search_config = search_config_record_id;
search_config_sources.source = cxs_record_id;
search_config_sources.insert();
