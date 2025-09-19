"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Search,
  MoreHorizontal,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Filter,
  Eye,
  UserPlus,
  BookOpen,
  Settings,
} from "lucide-react"

// Mock data for requests
const mockRequests = [
  {
    id: 1,
    type: "Course Enrollment",
    title: "Request to enroll in Advanced Safety Management",
    requester: {
      name: "John Smith",
      email: "john.smith@company.com",
      avatar: "/professional-man.png",
    },
    status: "Pending",
    priority: "High",
    submittedAt: "2024-01-15T10:30:00Z",
    description:
      "I would like to enroll in the Advanced Safety Management course to enhance my skills in workplace safety protocols.",
    course: "Advanced Safety Management",
    reason: "Career development and compliance requirements",
  },
  {
    id: 2,
    type: "Account Access",
    title: "Password reset request",
    requester: {
      name: "Maria Garcia",
      email: "maria.garcia@company.com",
      avatar: "/professional-woman-diverse.png",
    },
    status: "Approved",
    priority: "Medium",
    submittedAt: "2024-01-14T14:20:00Z",
    description:
      "Unable to access account due to forgotten password. Need immediate reset to continue with ongoing courses.",
    reason: "Forgotten password",
  },
  {
    id: 3,
    type: "Course Creation",
    title: "New course proposal: Industrial IoT Fundamentals",
    requester: {
      name: "Dr. Robert Chen",
      email: "robert.chen@company.com",
      avatar: "/professional-man-manager.jpg",
    },
    status: "Under Review",
    priority: "High",
    submittedAt: "2024-01-13T09:15:00Z",
    description:
      "Proposal for a new course covering Industrial Internet of Things fundamentals, including sensor networks and data analytics.",
    course: "Industrial IoT Fundamentals",
    reason: "Market demand and technology advancement",
  },
  {
    id: 4,
    type: "Instructor Application",
    title: "Application to become course instructor",
    requester: {
      name: "Sarah Wilson",
      email: "sarah.wilson@company.com",
      avatar: "/professional-woman-engineer.png",
    },
    status: "Rejected",
    priority: "Medium",
    submittedAt: "2024-01-12T16:45:00Z",
    description:
      "Application to become an instructor for Quality Control courses based on 10 years of industry experience.",
    reason: "Insufficient teaching credentials",
  },
  {
    id: 5,
    type: "Technical Support",
    title: "Video playback issues in course materials",
    requester: {
      name: "Alex Thompson",
      email: "alex.thompson@company.com",
      avatar: "/professional-asian-woman.png",
    },
    status: "Pending",
    priority: "Low",
    submittedAt: "2024-01-11T11:30:00Z",
    description:
      "Experiencing consistent video playback issues in the Automation Systems course. Videos buffer frequently and audio is out of sync.",
    course: "Automation Systems",
    reason: "Technical difficulties",
  },
]

export function RequestsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedRequest, setSelectedRequest] = useState<(typeof mockRequests)[0] | null>(null)

  const filteredRequests = mockRequests.filter((request) => {
    const matchesSearch =
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.requester.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus =
      selectedStatus === "all" || request.status.toLowerCase().replace(" ", "").includes(selectedStatus.toLowerCase())
    const matchesType =
      selectedType === "all" || request.type.toLowerCase().replace(" ", "").includes(selectedType.toLowerCase())
    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Approved":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Rejected":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "Under Review":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "Medium":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Low":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Course Enrollment":
        return <BookOpen className="w-4 h-4" />
      case "Account Access":
        return <UserPlus className="w-4 h-4" />
      case "Course Creation":
        return <BookOpen className="w-4 h-4" />
      case "Instructor Application":
        return <UserPlus className="w-4 h-4" />
      case "Technical Support":
        return <Settings className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Requests Management</h1>
          <p className="text-muted-foreground">Review and manage user requests and applications</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-card to-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">23</div>
            <p className="text-xs text-muted-foreground">+5 from last week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">8</div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">12</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">3</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle>Request Queue</CardTitle>
          <CardDescription>Review and process user requests and applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search requests by title or requester..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="min-w-[120px] bg-transparent">
                    <Filter className="w-4 h-4 mr-2" />
                    {selectedStatus === "all" ? "All Status" : selectedStatus}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSelectedStatus("all")}>All Status</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedStatus("pending")}>Pending</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedStatus("approved")}>Approved</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedStatus("rejected")}>Rejected</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedStatus("underreview")}>Under Review</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="min-w-[120px] bg-transparent">
                    <Filter className="w-4 h-4 mr-2" />
                    {selectedType === "all" ? "All Types" : selectedType}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSelectedType("all")}>All Types</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedType("courseenrollment")}>
                    Course Enrollment
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedType("accountaccess")}>Account Access</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedType("coursecreation")}>Course Creation</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedType("instructorapplication")}>
                    Instructor Application
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedType("technicalsupport")}>
                    Technical Support
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Requests Table */}
          <div className="rounded-md border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Request</TableHead>
                  <TableHead>Requester</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Priority</TableHead>
                  <TableHead className="hidden lg:table-cell">Submitted</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id} className="hover:bg-muted/30">
                    <TableCell>
                      <div className="flex items-start space-x-3">
                        <div className="mt-1 p-2 bg-muted/50 rounded-lg">{getTypeIcon(request.type)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground truncate">{request.title}</div>
                          <div className="text-sm text-muted-foreground">{request.type}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={request.requester.avatar || "/placeholder.svg"}
                            alt={request.requester.name}
                          />
                          <AvatarFallback>
                            {request.requester.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-foreground">{request.requester.name}</div>
                          <div className="text-sm text-muted-foreground">{request.requester.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(request.status)}>
                        {request.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="outline" className={getPriorityColor(request.priority)}>
                        {request.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                      {formatDate(request.submittedAt)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedRequest(request)}>
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-2">
                                {getTypeIcon(request.type)}
                                {request.title}
                              </DialogTitle>
                              <DialogDescription>Request details and actions</DialogDescription>
                            </DialogHeader>
                            {selectedRequest && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-muted-foreground">Type</label>
                                    <p className="text-foreground">{selectedRequest.type}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-muted-foreground">Status</label>
                                    <div className="mt-1">
                                      <Badge variant="outline" className={getStatusColor(selectedRequest.status)}>
                                        {selectedRequest.status}
                                      </Badge>
                                    </div>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-muted-foreground">Priority</label>
                                    <div className="mt-1">
                                      <Badge variant="outline" className={getPriorityColor(selectedRequest.priority)}>
                                        {selectedRequest.priority}
                                      </Badge>
                                    </div>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-muted-foreground">Submitted</label>
                                    <p className="text-foreground">{formatDate(selectedRequest.submittedAt)}</p>
                                  </div>
                                </div>

                                <div>
                                  <label className="text-sm font-medium text-muted-foreground">Requester</label>
                                  <div className="flex items-center space-x-3 mt-2">
                                    <Avatar className="h-10 w-10">
                                      <AvatarImage
                                        src={selectedRequest.requester.avatar || "/placeholder.svg"}
                                        alt={selectedRequest.requester.name}
                                      />
                                      <AvatarFallback>
                                        {selectedRequest.requester.name
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <div className="font-medium text-foreground">
                                        {selectedRequest.requester.name}
                                      </div>
                                      <div className="text-sm text-muted-foreground">
                                        {selectedRequest.requester.email}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <label className="text-sm font-medium text-muted-foreground">Description</label>
                                  <p className="text-foreground mt-1">{selectedRequest.description}</p>
                                </div>

                                {selectedRequest.course && (
                                  <div>
                                    <label className="text-sm font-medium text-muted-foreground">Course</label>
                                    <p className="text-foreground mt-1">{selectedRequest.course}</p>
                                  </div>
                                )}

                                <div>
                                  <label className="text-sm font-medium text-muted-foreground">Reason</label>
                                  <p className="text-foreground mt-1">{selectedRequest.reason}</p>
                                </div>

                                {selectedRequest.status === "Pending" && (
                                  <div className="flex gap-2 pt-4">
                                    <Button className="bg-green-600 hover:bg-green-700">
                                      <CheckCircle className="w-4 h-4 mr-2" />
                                      Approve
                                    </Button>
                                    <Button variant="destructive">
                                      <XCircle className="w-4 h-4 mr-2" />
                                      Reject
                                    </Button>
                                    <Button variant="outline">
                                      <Clock className="w-4 h-4 mr-2" />
                                      Mark Under Review
                                    </Button>
                                  </div>
                                )}
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            {request.status === "Pending" && (
                              <>
                                <DropdownMenuItem className="text-green-600">Approve Request</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Reject Request</DropdownMenuItem>
                              </>
                            )}
                            <DropdownMenuItem>Contact Requester</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
