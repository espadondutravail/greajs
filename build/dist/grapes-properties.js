define([], function() { return [{"type":"form","props":[{"type":"select","label":"Method","name":"method","options":[{"value":"post","name":"POST"},{"value":"get","name":"GET"}]},{"label":"Action","name":"action"}]},{"type":"input","props":[{"name":"name","label":"Name"},{"name":"placeholder","label":"Placeholder"},{"label":"Type","type":"select","name":"type","options":[{"value":"text","name":"Text"},{"value":"email","name":"Email"},{"value":"password","name":"Password"},{"value":"number","name":"Number"}]},{"type":"checkbox","name":"required","label":"Required"}]},{"type":"textarea","props":[{"name":"name","label":"Name"},{"name":"placeholder","label":"Placeholder"},{"type":"checkbox","name":"required","label":"Required"}]},{"type":"select","props":[{"name":"name","label":"Name"},{"type":"checkbox","name":"required","label":"Required"}]},{"type":"checkbox","props":[{"name":"id","label":"ID"},{"name":"name","label":"Name"},{"name":"value","label":"Value"},{"type":"checkbox","name":"required","label":"Required"},{"label":"Checked","type":"checkbox","name":"checked"}]},{"type":"radio","props":["id","title"]},{"type":"button","props":[{"type":"content","label":"Text"},{"label":"Type","type":"select","name":"type","options":[{"value":"submit","name":"Submit"},{"value":"reset","name":"Reset"},{"value":"button","name":"Button"}]}]},{"type":"label","props":[{"name":"for","label":"For"}]}] });