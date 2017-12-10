from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

'''from a browser's perspective
POST: receive something
GET: send back data only
'''

stores = [
	{
		'name': 'Mitran Da Junction',
		'items': [
			{
			'name': 'Choori',
			'price': 100
			}
		]
	}
]

@app.route('/')
def home():
	return render_template('index.html')

#creating endpoints
# POST /store data: {name:}
@app.route('/store', methods=['POST']) 	#default method is GET
def create_store():
	request_data = request.get_json()	#converts json string to dict
	new_store = {
		'name': request_data['name'],
		'items':[]
	}
	stores.append(new_store)
	return jsonify(new_store)

# GET /store/<s tring: name>
@app.route('/store/<string:name>')		#http://127.0.0.1:5000/store/[name]
def get_store(name):
	#iterate over stores list and find store then return it
	for store in stores:
		if store['name'] == name:
			return jsonify(store)
	return jsonify({'message': 'store not found'})

# GET /store
@app.route('/store')
def get_stores():
	return jsonify({'stores': stores})				#converts dict to json; stores is a list so pass it as a dict

# POST /store/<string:name>/item {name:, price:}
@app.route('/store/<string:name>/item', methods=['POST']) 	
def create_item_in_store(name):
	request_data = request.get_json()
	for store in stores:
		if store['name'] == name:
			new_item = {
				'name': request_data['name'],
				'price': request_data['price']
			}
			store['items'].append(new_item)
			return jsonify(new_item)
	return jsonify({'message': 'store not found'})

# GET /store/<string:name>/item
@app.route('/store/<string:name>/item') 	
def get_items_in_store(name) :
	for store in stores:
		if store['name'] == name:
			return jsonify({'items': store['items']})
	return jsonify({'message': 'items not found'})


app.run(port=5000)

'''
@app.route('/')			#www.WebsiteName.com[/]
def home():
	return "Hello, world!"
'''