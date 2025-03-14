"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import {
	Box,
	CameraControls,
	Loader,
	MeshTransmissionMaterial,
	OrbitControls,
	PerspectiveCamera,
	Stage,
	useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import { JSX, Suspense } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Scene() {
	return (
		<div className="w-80 h-80">
			<Canvas>
				<Test />
			</Canvas>
		</div>
	);
}

const Test: () => JSX.Element = () => {
	const { nodes, materials } = useLoader(GLTFLoader, "assets/b.glb");
	return (
		<>
			<PerspectiveCamera makeDefault position={[0, 0, 10]} />
			<Stage environment="studio">
				<group dispose={null}>
					<Box args={[1, 1, 1]} position={[0, 0, -1]} />
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.path6 as THREE.Mesh).geometry}
						material={materials["Material.001"]}
					/>
				</group>
				<axesHelper scale={2} />
				<CameraControls />
			</Stage>
		</>
	);
};

//useGLTF.preload("/assets/b.glb");
