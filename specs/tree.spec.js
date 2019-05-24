const sinon = require('sinon');

const Tree = require('../src/tree');
const Node = require('../src/node');

describe('tree', function() {
    describe('constructor', function() {
        var tree = new Tree();

		it('this.root should be null', () => {
			expect(tree.root).to.equal(null);
		});

		it('this.nodes should be []', () => {
			expect(tree.nodes).to.deep.equal([]);
		});
    }),
    describe('insert', function() {
        it ('should update tree.node', function() {
            var tree = new Tree();

            tree.insert(18, 'sky');

            expect(tree.nodes).to.be.equal([node]);
            expect(tree.nodes[0].key).to.be.equal(18);           
            expect(tree.nodes[0]).to.be.an.instanceof(Node);
        }),
        it ('should insert any amount of data', function() {
            var tree = new Tree();

            tree.insert(18, 'sky');
            tree.insert(7, 'earth');
            tree.insert(12, 'water');
            tree.insert(99, 'fire');

            expect(tree.nodes).to.be.equal([node, node, node, node]);
            expect(tree.nodes[2].parent.key).to.be.equal(7);
            expect(tree.nodes[3].parent.key).to.be.equal(18);
        });
    }),
    describe('delete', function() {
        it ('should delete data from tree', function() {
            var tree = new Tree();

            tree.insert(18, 'sky');
            tree.insert(7, 'earth');
            tree.delete(7);

            expect(tree.nodes).to.be.equal([node]);
            expect(tree.nodes[0].key).to.be.equal(18);
            expect(tree.nodes[0].left).to.be.equal(null);
            expect(tree.nodes[0].right).to.be.equal(null);
        }),

        it ('should delete data from tree.nodes', function() {
            var tree = new Tree();

            tree.insert(99, 'fire');
            tree.insert(18, 'sky');
            tree.insert(7, 'earth');
            tree.delete(18, 7);

            expect(tree.nodes).to.be.equal([node]);
            expect(tree.nodes[0].key).to.be.equal(99);
        });
    }),
    describe('search', function() {
        it ('should return node with current key', function() {
            var tree = new Tree();

            tree.insert(18, 'sky');
            tree.insert(7, 'earth');
            var result = tree.search(7);

            expect(result).to.be.an.instanceof(Node);
            expect(result.key).to.be.equal(7);
            expect(result.parent.key).to.be.equal(18);
        });
    }),
    describe('contains', function() {
        it ('should return node with current value', function() {
            var tree = new Tree();

            tree.insert(18, 'sky');
            tree.insert(7, 'earth');
            var result = tree.contains('sky');

            expect(result).to.be.an.instanceof(Node);
            expect(result.key).to.be.equal(18);
            expect(result.parent.key).to.be.equal(null);
        }),
        it ('should return undefind if value did not contains tree', function() {
            var tree = new Tree();

            tree.insert(18, 'sky');
            tree.insert(7, 'earth');
            var result = tree.contains('water');

            expect(result).not.to.be.an.instanceof(Node);
            expect(result).to.be.an.instanceof(undefined);
        });
    });
});
