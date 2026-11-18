import { useMemo } from 'react';
import { ReactFlow, Background, Handle, Position, MarkerType, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { portfolio } from '../data/portfolio';

function FlowNode({ data }) {
  return (
    <div className={`flow-node ${data.output ? 'flow-output' : ''}`} title={data.tooltip}>
      <Handle type="target" position={Position.Left} />
      <div className="flow-node-head"><span className={`status-dot ${data.status || ''}`}/><b>{data.label}</b></div>
      {data.detail && <small>{data.detail}</small>}
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

const flowNodeTypes = { flow: FlowNode };

export default function WorkflowGraph() {
  const initialNodes = useMemo(() => [
    { id:'trigger', type:'flow', position:{x:0,y:155}, data:{label:'Trigger', detail:'Visitor arrives', tooltip:'Start of the portfolio workflow'} },
    { id:'agent', type:'flow', position:{x:185,y:155}, data:{label:'Lakshay Kumawat', detail:'AI agent', status:'success', tooltip:'My agent profile'} },
    { id:'python', type:'flow', position:{x:390,y:20}, data:{label:'Python', tooltip:'Python development'} },
    { id:'n8n', type:'flow', position:{x:390,y:105}, data:{label:'n8n', tooltip:'Workflow automation'} },
    { id:'supabase', type:'flow', position:{x:390,y:190}, data:{label:'Supabase', tooltip:'Data and apps'} },
    { id:'ai', type:'flow', position:{x:390,y:275}, data:{label:'Claude / GPT', tooltip:'AI-assisted development'} },
    { id:'projects', type:'flow', position:{x:595,y:75}, data:{label:'Projects', detail:'Deployed work', output:true, tooltip:'Scroll to projects'} },
    { id:'contact', type:'flow', position:{x:595,y:225}, data:{label:'Contact', detail:'Start a conversation', output:true, tooltip:'Scroll to contact'} },
  ], []);
  const initialEdges = useMemo(() => [
    ['trigger','agent'],['agent','python'],['agent','n8n'],['agent','supabase'],['agent','ai'],
    ['python','projects'],['n8n','projects'],['supabase','contact'],['ai','contact'],
  ].map(([source,target], index) => ({ id:`edge-${index}`, source, target, animated:true, type:'smoothstep', style:{stroke:'#A5B4FC',strokeWidth:1.5}, markerEnd:{type:MarkerType.ArrowClosed,color:'#A5B4FC',width:14,height:14} })), []);
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);
  return (
    <div className="workflow-canvas">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={flowNodeTypes}
        fitView
        fitViewOptions={{ padding:0.12 }}
        minZoom={0.55}
        maxZoom={1.3}
        nodesDraggable
        nodesConnectable={false}
        elementsSelectable
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch
        onNodeClick={(_, node) => {
          if (node.id === 'projects') document.querySelector('#projects')?.scrollIntoView({ behavior:'smooth' });
          if (node.id === 'contact') document.querySelector('#contact')?.scrollIntoView({ behavior:'smooth' });
        }}
      >
        <Background gap={18} size={1} color="var(--grid)" />
      </ReactFlow>
    </div>
  );
}
