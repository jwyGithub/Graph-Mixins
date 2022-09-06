import Cell from '../view/cell/Cell';
import CellArray from '../view/cell/CellArray';
import Dictionary from './Dictionary';
import { Graph } from '../view/Graph';
/*****************************************************************************
 * Group: Tree and traversal-related
 *****************************************************************************/
/**
 * Returns all children in the given parent which do not have incoming
 * edges. If the result is empty then the with the greatest difference
 * between incoming and outgoing edges is returned.
 *
 * @param parent {@link mxCell} whose children should be checked.
 * @param isolate Optional boolean that specifies if edges should be ignored if
 * the opposite end is not a child of the given parent cell. Default is
 * false.
 * @param invert Optional boolean that specifies if outgoing or incoming edges
 * should be counted for a tree root. If false then outgoing edges will be
 * counted. Default is `false`.
 */
export declare function findTreeRoots(graph: Graph, parent: Cell, isolate?: boolean, invert?: boolean): CellArray;
/**
 * Traverses the (directed) graph invoking the given function for each
 * visited vertex and edge. The function is invoked with the current vertex
 * and the incoming edge as a parameter. This implementation makes sure
 * each vertex is only visited once. The function may return false if the
 * traversal should stop at the given vertex.
 *
 * Example:
 *
 * ```javascript
 * MaxLog.show();
 * let cell = graph.getSelectionCell();
 * graph.traverse(cell, false, (vertex, edge)=>
 * {
 *   MaxLog.debug(graph.getLabel(vertex));
 * });
 * ```
 *
 * @param vertex <Cell> that represents the vertex where the traversal starts.
 * @param directed Optional boolean indicating if edges should only be traversed
 * from source to target. Default is true.
 * @param func Visitor function that takes the current vertex and the incoming
 * edge as arguments. The traversal stops if the function returns false.
 * @param edge Optional <Cell> that represents the incoming edge. This is
 * null for the first step of the traversal.
 * @param visited Optional {@link Dictionary} from cells to true for the visited cells.
 * @param inverse Optional boolean to traverse in inverse direction. Default is false.
 * This is ignored if directed is false.
 */
export declare function traverse(vertex?: Cell | null, directed?: boolean, func?: Function | null, edge?: Cell | null, visited?: Dictionary<Cell, boolean> | null, inverse?: boolean): void;