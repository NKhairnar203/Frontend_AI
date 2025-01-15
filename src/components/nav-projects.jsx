
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavProjects() {
  // const { isMobile } = useSidebar()

  return (
    (<SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        
        <SidebarMenuItem>
          <div className="ml-5">
            Working on this Component...
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>)
  );
}
